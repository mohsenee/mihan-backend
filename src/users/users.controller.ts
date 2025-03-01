import { Controller, Get, Post, Param, Body, Query, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  DeleteUserByIdDto,
  GetUserByCodeAndPass,
  GetUserByCodeDto,
  GetUserByIdDto,
  GetUserByRoleDto,
  UpdateUserDto,
} from './users.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('getAllUsers')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('getUserById')
  getUserById(@Query() dto: GetUserByIdDto) {
    return this.usersService.getUserById(dto);
  }

  @Get('getUserByCodeAndPass')
  getUserByCodeAndPass(@Query() dto: GetUserByCodeAndPass) {
    return this.usersService.getUserByCodeAndPass(dto);
  }

  @Get('getUserByCode')
  getUserByCode(@Query() dto: GetUserByCodeDto) {
    return this.usersService.getUserByCode(dto);
  }

  @Get('deleteUserById')
  deleteUserById(@Query() dto: DeleteUserByIdDto) {
    return this.usersService.deleteUserById(dto.userId);
  }

  @Get('getUserByRole')
  getUserByRole(@Query() dto: GetUserByRoleDto) {
    return this.usersService.getUserByRole(dto);
  }

  @Post('createUser')
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }

  @Put('updateUser/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.updateUser(id, body);
  }
}
