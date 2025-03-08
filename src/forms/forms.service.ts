import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import {
  CreateFormDto,
  DailyFormMessagesDto,
  DeleteFormByIdDto,
  GetFormByIdDto,
  GetFormsByRoleAndDateDto,
  GetFormsByRoleDto,
  GetFormsByRoleResultDto,
  GetMessageByUserIdDto,
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
  DailyFormMessagesEntity,
} from './forms.entity';
import { MongoRepository } from 'typeorm';
import { UserEntity } from 'src/users/users.entity';
const mongoose = require('mongoose');

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntityRepository: MongoRepository<UserEntity>,
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
    @InjectRepository(DailyFormMessagesEntity)
    private dailyFormMessagesRepository: MongoRepository<DailyFormMessagesEntity>,
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

    const messages = await this.dailyFormMessagesRepository.find({
      where: { isExpired: false, role: dto.role, reportDate: form.reportDate },
    });
    if (messages.length > 0) {
      for (let message of messages) {
        message.isExpired = true;
        await this.dailyFormMessagesRepository.save(message);
      }
    }

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

      const forms = await repository.find({
        where: { isExpired: false, reportDate: dto.reportDate },
      });

      if (!forms || forms.length === 0) {
        console.log('No reports found');
        return false;
      } else return true;
    } catch (error) {
      console.error('Error in getFormsByRole:', error.message);
      throw error;
    }
  }

  async checkFormsAndCreateMessage(): Promise<void> {
    const date = new Date();

    const previousDate = new Date(date);
    previousDate.setDate(date.getDate() - 1);

    const yesterday = new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(previousDate);

    console.log('Yesterday:', yesterday);

    const repoMap = {
      Switch: this.switchFormEntityRepository,
      Mux: this.muxFormEntityRepository,
      Fiber: this.fiberFormEntityRepository,
      Facilities: this.facilitiesFormEntityRepository,
      Power: this.powerFormEntityRepository,
    };

    for (const [repoName, repo] of Object.entries(repoMap)) {
      const form = await repo.findOne({
        where: { isExpired: false, reportDate: yesterday },
      });
      if (!form) {
        const users = await this.userEntityRepository.find({
          where: {
            $or: [
              { access: { $in: [1, 2] } }, // If access is 1 or 2
              {
                $and: [
                  { access: { $in: [3, 4] } }, // If access is 3 or 4
                  { role: repoName }, // AND role must be "mux"
                ],
              },
            ],
          },
          select: ['_id'], // Only select userId field
        });

        // Map only userId fields into an array
        const userIds = users.map((user) => user.id);

        console.log(repoName);

        console.log(userIds);
        console.log('*********************');
        for (let userId of userIds) {
          let message = {} as DailyFormMessagesDto;
          message.userId = userId.toString();
          message.isExpired = false;
          message.isSeen = false;
          message.reportDate = yesterday;
          message.role = repoName;

          console.log(message);

          await this.dailyFormMessagesRepository.save(message);
        }
      }
    }
  }

  async getMessageByUserId(dto: GetMessageByUserIdDto) {
    const messages = await this.dailyFormMessagesRepository.find({
      where: { userId: dto.userId, isExpired: false },
    });

    return messages;
  }
}
