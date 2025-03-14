import { Injectable } from '@nestjs/common';
import {
  CreateUserDto,
  GetUserByCodeDto,
  GetUserByCodeAndPass,
  UpdateUserDto,
  GetUserByRoleDto,
  GetUserByIdDto,
} from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { In, MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import * as bcrypt from 'bcrypt';
const mongoose = require('mongoose');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntityRepository: MongoRepository<UserEntity>,
  ) {}

  async getAllUsers() {
    return await this.userEntityRepository.find({});
  }

  async getUserById(dto: GetUserByIdDto) {
    try {
      if (!mongoose.Types.ObjectId.isValid(dto.userId)) {
        throw new Error('Invalid ID format');
      }

      const user = await this.userEntityRepository.findOne({
        where: {
          _id: new ObjectId(dto.userId),
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      console.error('Error in getUserById:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async getUserByCodeAndPass(dto: GetUserByCodeAndPass) {
    try {
      const user = await this.userEntityRepository.findOne({
        where: {
          code: dto.code,
          password: dto.password,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }
      console.log(user);
      return user;
    } catch (error) {
      console.error('Error in getUserById:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async getUserByCode(dto: GetUserByCodeDto) {
    try {
      const user = await this.userEntityRepository.findOne({
        where: {
          code: dto.code,
        },
      });

      if (!user) {
        return false;
      } else return true;
    } catch (error) {
      console.error('Error in getUserById:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async findUserByCode(dto: GetUserByCodeDto) {
    try {
      const user = await this.userEntityRepository.findOne({
        where: {
          code: dto.code,
        },
      });

      if (!user) {
        return false;
      } else return user;
    } catch (error) {
      console.error('Error in getUserById:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async getUserByRole(dto: GetUserByRoleDto) {
    try {
      const users = await this.userEntityRepository.find({
        where: {
          role: dto.role,
          access: { $in: [4, 5] },
        },
      });

      if (!users) {
        return [];
      } else return users.map((p) => p.name);
    } catch (error) {
      console.error('Error in getUserByRole:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async createUser(user: CreateUserDto) {
    return await this.userEntityRepository.save(user);
  }

  async deleteUserById(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid ID format');
      }

      await this.userEntityRepository.deleteOne({
        where: {
          _id: new mongoose.Types.ObjectId(id),
        },
      });
    } catch (error) {
      console.error('Error in deleteUserById:', error.message);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    // Find the user by ID
    const existingUser = await this.userEntityRepository.findOne({
      where: {
        _id: new mongoose.Types.ObjectId(id),
      },
    });

    if (!existingUser) {
      throw new Error('User not found');
    }

    // Merge the existing user with new data
    const updatedUser = { ...existingUser, ...updateUserDto };

    // Save the updated user back to the database
    return await this.userEntityRepository.save(updatedUser);
  }
}
