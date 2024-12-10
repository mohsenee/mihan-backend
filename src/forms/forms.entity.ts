import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { baseEntity } from 'src/baseEntity.entity';
import { Column, Entity } from 'typeorm';
import { FilesCapacityDto, ReportsDto, SystemConditionDto } from './forms.dto';

@Entity()
export class SwitchFormEntity extends baseEntity {
    @ApiProperty()
    @Column()
    title: string;

    @ApiProperty()
    @Column()
    name: string[];
  
    @ApiProperty()
    @Column()
    date: string;
  
    @ApiProperty()
    @Column()
    day: string;
  
    @ApiProperty()
    @Column()
    systemCondition: SystemConditionDto;
  
    @ApiProperty()
    @Column()
    filesCapacity: FilesCapacityDto;
  
    @ApiProperty()
    @Column()
    reports: ReportsDto;
}