import { Controller, Get, Post, Param, Body, Query, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, DeleteUserById, GetUserById, UpdateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('getAllUsers')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('getUserById')
  getUserById( @Query() dto: GetUserById,) {
    return this.usersService.getUserById(dto.userId);
  }

  @Get('deleteUserById')
  deleteUserById( @Query() dto: DeleteUserById,) {
    return this.usersService.deleteUserById(dto.userId);
  }

  @Post('createUser')
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }

  @Put('updateUser/:id')
  updateUser( @Param('id') id: string,@Body() body: UpdateUserDto) {
    return this.usersService.updateUser(id, body);
  }
}
