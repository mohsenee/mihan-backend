import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
    @ApiProperty()
    @Column()
    name: string;

    @ApiPropertyOptional()
    @Column()
    email: string;

    @ApiPropertyOptional()
    @Column()
    role: string;

    @ApiPropertyOptional()
    @Column()
    access: number;

    @ApiPropertyOptional()
    @Column()
    code: string;

    @ApiPropertyOptional()
    @Column()
    phoneNumber: string;

    @ApiPropertyOptional()
    @Column()
    password: string;

}