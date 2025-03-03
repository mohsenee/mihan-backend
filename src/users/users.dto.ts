import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import exp from 'constants';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  role: string;

  @ApiPropertyOptional()
  access: number;

  @ApiPropertyOptional()
  code: string;

  @ApiPropertyOptional()
  phoneNumber: string;

  @ApiPropertyOptional()
  password: string;
}

export class UpdateUserDto {
  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional()
  role?: string;

  @ApiPropertyOptional()
  code?: string;
}

export class GetUserByIdDto {
  @ApiProperty()
  userId: string;
}

export class GetUserByCodeAndPass {
  @ApiProperty()
  code: string;

  @ApiProperty()
  password: string;
}

export class GetUserByCodeDto {
  @ApiProperty()
  code: string;
}

export class DeleteUserByIdDto {
  @ApiProperty()
  userId: string;
}

export class GetUserByRoleDto {
  @ApiProperty()
  role: string;
}
