import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  role: string;

  @ApiPropertyOptional()
  code: string;

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

export class GetUserById {
  @ApiProperty()
  userId: string
}

export class DeleteUserById {
  @ApiProperty()
  userId: string
}
