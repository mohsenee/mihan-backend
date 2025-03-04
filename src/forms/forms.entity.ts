import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity.entity';
import { Column, Entity } from 'typeorm';
import { FacilitiesReportsDto, FiberTable1Dto, FiberTable2Dto, FiberTable3Dto, MuxMissionReportsDto, MuxReportsDto, MuxTableDto, PowerTable1Dto, PowerTable2Dto, PowerTable3Dto, PowerTable4Dto, PowerTable5Dto, PowerTable6Dto } from './forms.dto';

@Entity()
export class SwitchFormEntity extends BaseEntity {
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
  comments: string;

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
  RCVTrafficFile: boolean;

  @ApiProperty()
  @Column()
  ProcessTrafficFile: boolean;

  @ApiProperty()
  @Column()
  RCVChargingFile: boolean;

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

  @ApiProperty()
  @Column({ default: 1 })
  version: number;

  @ApiProperty()
  @Column({ default: false })
  isExpired: boolean;

  @ApiProperty()
  @Column()
  createdBy: string;

  @ApiProperty()
  @Column({ nullable: true })
  updatedBy: string;
}

@Entity()
export class MuxFormEntity extends BaseEntity {
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
  comments: string;

  @ApiProperty()
  @Column()
  dailyReportChecking: string;

  @ApiProperty()
  @Column()
  phoneLineChecking: string;

  @ApiProperty()
  @Column()
  temperature: string;

  @ApiProperty()
  @Column()
  cleaning: string;

  @ApiProperty()
  @Column()
  reports: MuxReportsDto[];

  @ApiProperty()
  @Column()
  missionReports: MuxMissionReportsDto[];

  @ApiProperty()
  @Column()
  alarms: MuxTableDto;

  @ApiProperty()
  @Column()
  network: MuxTableDto;

  @ApiProperty()
  @Column()
  NE: MuxTableDto;

  @ApiProperty()
  @Column()
  controlCenter: MuxTableDto;

  @ApiProperty()
  @Column()
  routers: MuxTableDto;

  @ApiProperty()
  @Column()
  speakerBuzzer: MuxTableDto;

  @ApiProperty()
  @Column()
  antiVirous: MuxTableDto;

  @ApiProperty()
  @Column()
  Ur: MuxTableDto;

  @ApiProperty()
  @Column()
  UPS: MuxTableDto;

  @ApiProperty()
  @Column({ default: 1 })
  version: number;

  @ApiProperty()
  @Column({ default: false })
  isExpired: boolean;

  @ApiProperty()
  @Column()
  createdBy: string;

  @ApiProperty()
  @Column({ nullable: true })
  updatedBy: string;
}

@Entity()
export class FacilitiesFormEntity extends BaseEntity {
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
  comments: string;

  @ApiProperty()
  @Column()
  reports: FacilitiesReportsDto[];

  @ApiProperty()
  @Column({ default: 1 })
  version: number;

  @ApiProperty()
  @Column({ default: false })
  isExpired: boolean;

  @ApiProperty()
  @Column()
  createdBy: string;

  @ApiProperty()
  @Column({ nullable: true })
  updatedBy: string;

}

@Entity()
export class FiberFormEntity extends BaseEntity {
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
  comments: string;

  @ApiProperty()
  @Column()
  table1: FiberTable1Dto[];

  @ApiProperty()
  @Column()
  table2: FiberTable2Dto[];

  @ApiProperty()
  @Column()
  table3: FiberTable3Dto[];

  @ApiProperty()
  @Column({ default: 1 })
  version: number;

  @ApiProperty()
  @Column({ default: false })
  isExpired: boolean;

  @ApiProperty()
  @Column()
  createdBy: string;

  @ApiProperty()
  @Column({ nullable: true })
  updatedBy: string;

}


@Entity()
export class PowerFormEntity extends BaseEntity {
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
  comments: string;

  @ApiProperty()
  @Column()
  diesel_generator_1: PowerTable1Dto;

  @ApiProperty()
  @Column()
  diesel_generator_2: PowerTable1Dto;

  @ApiProperty()
  @Column()
  EMP1: PowerTable2Dto;

  @ApiProperty()
  @Column()
  EMP2: PowerTable2Dto;

  @ApiProperty()
  @Column()
  MP: PowerTable2Dto;

  @ApiProperty()
  @Column()
  capacitor: PowerTable3Dto;

  @ApiProperty()
  @Column()
  REC1: PowerTable4Dto;

  @ApiProperty()
  @Column()
  REC2: PowerTable4Dto;

  @ApiProperty()
  @Column()
  REC3: PowerTable4Dto;

  @ApiProperty()
  @Column()
  REC4: PowerTable4Dto;

  @ApiProperty()
  @Column()
  UPS_Newave: PowerTable5Dto;

  @ApiProperty()
  @Column()
  UPS_Riello: PowerTable5Dto;

  @ApiProperty()
  @Column()
  CONVERTOR: PowerTable6Dto;

  @ApiProperty()
  @Column()
  INVERTOR: PowerTable6Dto;

  @ApiProperty()
  @Column({ default: 1 })
  version: number;

  @ApiProperty()
  @Column({ default: false })
  isExpired: boolean;

  @ApiProperty()
  @Column()
  createdBy: string;

  @ApiProperty()
  @Column({ nullable: true })
  updatedBy: string;

}
