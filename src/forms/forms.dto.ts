import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import exp from 'constants';

export class SystemConditionDto {
  @ApiProperty()
  CP: boolean;

  @ApiProperty()
  SN: boolean;

  @ApiProperty()
  MB: boolean;

  @ApiProperty()
  SSNC: boolean;

  @ApiProperty()
  NETM: boolean;

  @ApiProperty()
  AMP: boolean;

  @ApiProperty()
  CCG: boolean;

  @ApiProperty()
  LTG: boolean;

  @ApiProperty()
  ALARM: boolean;

  @ApiProperty()
  IO: boolean;

  @ApiProperty()
  LOG: boolean;

  @ApiProperty()
  Holiday: boolean;

  @ApiProperty()
  SignalingLinks: boolean;

  @ApiProperty()
  PCMFaultCount: number;

  @ApiProperty()
  testRoutins: boolean;

  @ApiProperty()
  airConditioner: boolean;

  @ApiProperty()
  linePower: boolean;

  @ApiProperty()
  ISMN: boolean;

  @ApiProperty()
  Billing: boolean;

  @ApiProperty()
  tempreture: number;

  @ApiProperty()
  humidity: number;
}

export class FilesCapacityDto {
  @ApiProperty()
  HF_ARCHIVE: number;

  @ApiProperty()
  SG_OPER: number;

  @ApiProperty()
  HF_MCP_HWERROR: number;

  @ApiProperty()
  TM_MNT_PORT: number;

  @ApiProperty()
  TM_MNT_PCM: number;
}

export class ReportsDto {
  @ApiProperty()
  text: string;

  @ApiProperty()
  RCVTrafficFile: boolean;

  @ApiProperty()
  ProcessTrafficFile: boolean;

  @ApiProperty()
  RCVChargingFile: boolean;
}

export class CreateSwitchFormDto {
  @ApiProperty()
  names: string[];

  @ApiProperty()
  date: string;

  @ApiProperty()
  day: string;

  @ApiProperty()
  systemCondition: SystemConditionDto;

  @ApiProperty()
  filesCapacity: FilesCapacityDto;

  @ApiProperty()
  reports: ReportsDto;
}

export class UpdateSwitchFormDto {
  @ApiProperty()
  names: string[];

  @ApiProperty()
  date: string;

  @ApiProperty()
  day: string;

  @ApiProperty()
  systemCondition: SystemConditionDto;

  @ApiProperty()
  filesCapacity: FilesCapacityDto;

  @ApiProperty()
  reports: ReportsDto;
}

export class GetFormByIdDto {
  @ApiProperty()
  formId: string
}

export class DeleteFormByIdDto {
  @ApiProperty()
  formId: string
}

export class CreateDataFormDto {
  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional()
  role?: string;

  @ApiPropertyOptional()
  code?: string;
}
