import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { baseEntity } from 'src/baseEntity.entity';
import { Column, Entity } from 'typeorm';
import { FilesCapacityDto, ReportsDto, SystemConditionDto } from './forms.dto';

@Entity()
export class SwitchFormEntity extends baseEntity {
  // @ApiProperty()
  // @Column()
  // title: string;

  // @ApiProperty()
  // @Column()
  // names: string[];

  // @ApiProperty()
  // @Column()
  // date: string;

  // @ApiProperty()
  // @Column()
  // day: string;

  // @ApiProperty()
  // @Column()
  // systemCondition: SystemConditionDto;

  // @ApiProperty()
  // @Column()
  // filesCapacity: FilesCapacityDto;

  // @ApiProperty()
  // @Column()
  // reports: ReportsDto;

  @ApiProperty()
  @Column()
  names: string[];

  @ApiProperty()
  @Column()
  reportDate: string;

  @ApiProperty()
  @Column()
  day: string;

  @ApiProperty()
  @Column()
  bandwidth: string;

  @ApiProperty()
  @Column()
  data_status: boolean;

  @ApiProperty()
  @Column()
  log_review: boolean;

  @ApiProperty()
  @Column()
  network_traffic: boolean;

  @ApiProperty()
  @Column()
  sensor_status: boolean;

  @ApiProperty()
  @Column()
  switch_status: boolean;

  @ApiProperty()
  @Column()
  comments: string;

  @ApiProperty()
  @Column()
  hf_archive: string;

  @ApiProperty()
  @Column()
  humidity: string;

  @ApiProperty()
  @Column()
  sg_oper: string;

  @ApiProperty()
  @Column()
  temperature: string;

  @ApiProperty()
  @Column()
  tm_mnt_pcm: string;

  @ApiProperty()
  @Column()
  tm_mnt_port: string;
}
