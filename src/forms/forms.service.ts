import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import {
  CreateFormDto,
  DeleteFormByIdDto,
  GetFormByIdDto,
  GetFormsByRoleAndDateDto,
  GetFormsByRoleDto,
  GetFormsByRoleResultDto,
  UpdateFormByIdDto,
  getBandwidthDto,
  getTempretureHumidityDto,
} from './forms.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  MuxFormEntity,
  SwitchFormEntity,
  FacilitiesFormEntity,
  FiberFormEntity,
  PowerFormEntity,
} from './forms.entity';
import { MongoRepository } from 'typeorm';
const mongoose = require('mongoose');

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(SwitchFormEntity)
    private switchFormEntityRepository: MongoRepository<SwitchFormEntity>,
    @InjectRepository(MuxFormEntity)
    private muxFormEntityRepository: MongoRepository<MuxFormEntity>,
    @InjectRepository(FacilitiesFormEntity)
    private facilitiesFormEntityRepository: MongoRepository<FacilitiesFormEntity>,
    @InjectRepository(FiberFormEntity)
    private fiberFormEntityRepository: MongoRepository<FiberFormEntity>,
    @InjectRepository(PowerFormEntity)
    private powerFormEntityRepository: MongoRepository<PowerFormEntity>,
  ) {}

  private getRepository(role: string) {
    const repoMap = {
      Switch: this.switchFormEntityRepository,
      Mux: this.muxFormEntityRepository,
      Fiber: this.fiberFormEntityRepository,
      Facilities: this.facilitiesFormEntityRepository,
      Power: this.powerFormEntityRepository,
    };

    if (!repoMap[role]) {
      throw new Error(`Invalid role: ${role}`);
    }

    return repoMap[role];
  }

  async getFormById(dto: GetFormByIdDto) {
    console.log(`getFormsById called: ${dto.formId}`);
    try {
      if (!mongoose.Types.ObjectId.isValid(dto.formId)) {
        throw new Error('Invalid ID format');
      }

      const repository = this.getRepository(dto.role);
      const form = await repository.findOne({
        where: { _id: new ObjectId(dto.formId) },
      });

      if (!form) {
        throw new Error('Form not found');
      }

      return form;
    } catch (error) {
      console.error('Error in getFormById:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async createForm(dto: CreateFormDto) {
    console.log(`createForm called: ${dto.role}`);
    const repository = this.getRepository(dto.role);
    if (!repository) {
      throw new Error(`Invalid role: ${dto.role}`);
    }

    const form = await repository.create({
      ...dto.form,
      version: 1,
      isExpired: false,
    });

    return await repository.save(form);
  }

  async updateFormById(id: string, dto: UpdateFormByIdDto) {
    console.log(`updateFormById called: ${dto.formId}`);
    try {
      if (!mongoose.Types.ObjectId.isValid(dto.formId)) {
        throw new Error('Invalid ID format');
      }

      const repository = this.getRepository(dto.role);
      let existingForm = await repository.findOne({
        where: { _id: new ObjectId(dto.formId), isExpired: false },
      });

      if (!existingForm) {
        throw new Error(`${dto.role} Form not found`);
      }

      existingForm.isExpired = true;
      await repository.save(existingForm);

      const newForm = await repository.create({
        ...dto.form,
        version: existingForm.version + 1,
        isExpired: false,
      });

      return await repository.save(newForm);
    } catch (error) {
      console.error('Error in getFormById:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async deleteFormById(dto: DeleteFormByIdDto) {
    console.log(`deleteFormById called: ${dto.formId}`);
    try {
      if (!mongoose.Types.ObjectId.isValid(dto.formId)) {
        throw new Error('Invalid ID format');
      }

      const repository = this.getRepository(dto.role);
      const form = await repository.findOne({
        _id: new ObjectId(dto.formId),
        isExpired: false,
      });
      if (form) {
        form.isExpired = true;
        form.updatedBy = dto.updatedBy;
        return await repository.save(form);
      }
    } catch (error) {
      console.error('Error in getFormById:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async getTemperatureHumidityForLastMonth(): Promise<
    getTempretureHumidityDto[]
  > {
    const today = new Date();
    const startOfLastMonth = new Date(today);
    startOfLastMonth.setDate(today.getDate() - 30); // Subtract 30 days
    startOfLastMonth.setHours(0, 0, 0, 0); // Set to the start of the day (00:00:00)

    // Get the end of today (23:59:59)
    const endOfLastMonth = new Date(today);
    endOfLastMonth.setHours(23, 59, 59, 999);

    // Fetch the forms from the database using the createdAt field for filtering
    const forms = await this.switchFormEntityRepository.find({
      where: {
        createdAt: { $gte: startOfLastMonth, $lte: endOfLastMonth }, // Filter based on createdAt field
      },
    });

    // Map the forms to extract only the required fields (temperature, humidity, and reportDate)
    const temperatureHumidityData: getTempretureHumidityDto[] = forms.map(
      (form) => {
        return {
          temperature: Number(form.temperature) || null,
          humidity: Number(form.humidity) || null,
          reportDate: form.reportDate,
          day: form.day,
        };
      },
    );

    console.log(temperatureHumidityData);

    return temperatureHumidityData;
  }

  async getBandwidthForLastMonth(): Promise<getBandwidthDto[]> {
    const today = new Date();
    const startOfLastMonth = new Date(today);
    startOfLastMonth.setDate(today.getDate() - 30); // Subtract 30 days
    startOfLastMonth.setHours(0, 0, 0, 0); // Set to the start of the day (00:00:00)

    // Get the end of today (23:59:59)
    const endOfLastMonth = new Date(today);
    endOfLastMonth.setHours(23, 59, 59, 999);

    // Fetch the forms from the database using the createdAt field for filtering
    const forms = await this.switchFormEntityRepository.find({
      where: {
        createdAt: { $gte: startOfLastMonth, $lte: endOfLastMonth }, // Filter based on createdAt field
      },
    });

    // Map the forms to extract only the required fields (temperature, humidity, and reportDate)
    const bandwidthData: getBandwidthDto[] = forms.map((form) => {
      return {
        bandwidth: Number(form.bandwidth) || null,
        reportDate: form.reportDate,
        day: form.day,
      };
    });

    return bandwidthData;
  }

  async getFormsByRole(dto: GetFormsByRoleDto) {
    console.log(`getFormsByRole called: ${dto.role}`);
    try {
      const repository = this.getRepository(dto.role);
      if (!repository) {
        throw new Error(`Invalid role: ${dto.role}`);
      }

      const forms = await repository.find({ where: { isExpired: false } });

      if (!forms || forms.length === 0) {
        console.log('No reports found');
        return [];
      }

      const results: GetFormsByRoleResultDto[] = forms.map((f) => ({
        id: f.id,
        reportDate: f.reportDate,
      }));

      console.log(results);
      return results;
    } catch (error) {
      console.error('Error in getFormsByRole:', error.message);
      throw error;
    }
  }

  async getFormsByRoleAndDate(dto: GetFormsByRoleAndDateDto) {
    console.log(`getFormsByRoleAndDate called: ${dto.role} ${dto.reportDate}`);
    try {
        const repository = this.getRepository(dto.role);
        if (!repository) {
            throw new Error(`Invalid role: ${dto.role}`);
        }

        const forms = await repository.find({ where: {isExpired: false, reportDate: dto.reportDate} });

        if (!forms || forms.length === 0) {
            console.log('No reports found');
            return false;
        }else return true
    } catch (error) {
        console.error('Error in getFormsByRole:', error.message);
        throw error;
    }
}
}
