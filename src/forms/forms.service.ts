import { Injectable } from '@nestjs/common';
import { CreateSwitchFormDto, UpdateSwitchFormDto } from './forms.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SwitchFormEntity } from './forms.entity';
import { MongoRepository } from 'typeorm';
const mongoose = require('mongoose');

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(SwitchFormEntity)
    private switchFormEntityRepository: MongoRepository<SwitchFormEntity>,
  ) {}

  async getAllFormSwitch() {
    return await this.switchFormEntityRepository.find({});
  }

  async getSwitchFormById(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid ID format');
      }

      const form = await this.switchFormEntityRepository.findOne({
        where: {
          _id: new mongoose.Types.ObjectId(id),
        },
      });

      if (!form) {
        throw new Error('User not found');
      }

      return form;
    } catch (error) {
      console.error('Error in getSwitchFormById:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async createSwithForm(form: CreateSwitchFormDto) {
    return await this.switchFormEntityRepository.save(form); // Save it to the database
  }

  async deleteSwitchFormById(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid ID format');
      }

      await this.switchFormEntityRepository.deleteOne({
        where: {
          _id: new mongoose.Types.ObjectId(id),
        },
      });
    } catch (error) {
      console.error('Error in deleteSwitchFormById:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async updateSwitchForm(
    id: string,
    updateSwitchFormDto: UpdateSwitchFormDto,
  ): Promise<SwitchFormEntity> {
    // Find the user by ID
    const existingForm = await this.switchFormEntityRepository.findOne({
      where: {
        _id: new mongoose.Types.ObjectId(id),
      },
    });

    if (!existingForm) {
      throw new Error('SwitchForm not found');
    }

    // Merge the existing user with new data
    const updatedForm = { ...existingForm, ...updateSwitchFormDto };

    // Save the updated user back to the database
    return await this.switchFormEntityRepository.save(updatedForm);
  }
}
