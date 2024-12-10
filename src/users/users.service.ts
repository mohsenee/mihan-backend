import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { MongoRepository } from 'typeorm';
const mongoose = require("mongoose");

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntityRepository: MongoRepository<UserEntity>,
) { }

  async getAllUsers() {
    return await this.userEntityRepository.find({});
  }

  async getUserById(id: string) {
    
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid ID format');
      }
  
      const user = await this.userEntityRepository.findOne({
        where: {
          _id: new mongoose.Types.ObjectId(id),
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

  async createUser(user: CreateUserDto) {
    return await this.userEntityRepository.save(user); // Save it to the database
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

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
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
