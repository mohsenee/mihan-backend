import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { baseEntity } from 'src/baseEntity.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity extends baseEntity {
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
    code: string;

}