import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import exp from 'constants';

export class MuxTableDto {
  @ApiProperty()
  ENMS: boolean;

  @ApiProperty()
  SMSW: boolean;

  @ApiProperty()
  NM_Alcatel: boolean;

  @ApiProperty()
  OTNM: boolean;

  @ApiProperty()
  U2000_Huawei: boolean;

  @ApiProperty()
  SDH2000: boolean;

  @ApiProperty()
  NEC700: boolean;
}

export class MuxReportsDto {
  @ApiProperty()
  reporter: string;

  @ApiProperty()
  systemType: string;

  @ApiProperty()
  operation: string;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  endTime: string;

  @ApiProperty()
  alarm: string;

  @ApiProperty()
  description: string;
}

export class MuxMissionReportsDto {
  @ApiProperty()
  stationName: string;

  @ApiProperty()
  stationNumber: string;

  @ApiProperty()
  names: string;

  @ApiProperty()
  timeFromCenter: string;

  @ApiProperty()
  arriveTimeToStation: string;

  @ApiProperty()
  timeFromStation: string;

  @ApiProperty()
  workPermitNumber: string;
}

export class FacilitiesReportsDto {
  @ApiProperty()
  centerName: string;

  @ApiProperty()
  floor: string;

  @ApiProperty()
  station: string;

  @ApiProperty()
  EMPM: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  equipmentName: string;

  @ApiProperty()
  equipmentCode: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  items: string;

  @ApiProperty()
  itemsType: string;

  @ApiProperty()
  itemsNumber: string;
}

export class FiberTable1Dto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  OCDF_plan: string;

  @ApiProperty()
  GIS: string;

  @ApiProperty()
  fiber_plan: string;

  @ApiProperty()
  response: string;

  @ApiProperty()
  continuityTest: string;

  @ApiProperty()
  route: string;

  @ApiProperty()
  Long_UTM: string;

  @ApiProperty()
  LAT_UTM: string;

  @ApiProperty()
  improvment_security: string;

  @ApiProperty()
  fix_failure: string;

  @ApiProperty()
  door_cementing: string;
}

export class FiberTable2Dto {
  @ApiProperty()
  routeName: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  driver: string;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  endTime: string;

  @ApiProperty()
  km: string;

  @ApiProperty()
  excavation: string;

  @ApiProperty()
  excavatorName: string;

  @ApiProperty()
  license: string;

  @ApiProperty()
  startDate: string;

  @ApiProperty()
  endDate: string;

  @ApiProperty()
  LONG_UTM: string;

  @ApiProperty()
  LAT_UTM: string;

  @ApiProperty()
  description: string;
}

export class FiberTable3Dto {
  @ApiProperty()
  contractorName: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  phoneContractor: string;

  @ApiProperty()
  fromKm: string;

  @ApiProperty()
  toKm: string;

  @ApiProperty()
  bridgesCount: string;

  @ApiProperty()
  polesCount: string;

  @ApiProperty()
  pondsCount: string;

  @ApiProperty()
  routeLength: string;

  @ApiProperty()
  suggestions: string;

}

export class PowerTable1Dto {
  @ApiProperty()
  VBATT: string;

  @ApiProperty()
  IBATT: string;

  @ApiProperty()
  fuel: string;

  @ApiProperty()
  oil: string;

  @ApiProperty()
  water: string;

  @ApiProperty()
  diesel_heater: string;

  @ApiProperty()
  dampers: string;

  @ApiProperty()
  indicators_keys: string;

  @ApiProperty()
  appearance: string;

  @ApiProperty()
  temperature: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  descriptions: string;

}

export class PowerTable2Dto {
  @ApiProperty()
  VT: string;

  @ApiProperty()
  VS: string;

  @ApiProperty()
  VR: string;

  @ApiProperty()
  IT: string;

  @ApiProperty()
  IS: string;

  @ApiProperty()
  IR: string;

  @ApiProperty()
  indicators_keys: string;

  @ApiProperty()
  appearance: string;

  @ApiProperty()
  temperature: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  descriptions: string;

}

export class PowerTable3Dto {

  @ApiProperty()
  indicators_keys: string;

  @ApiProperty()
  appearance: string;

  @ApiProperty()
  temperature: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  descriptions: string;

}

export class PowerTable4Dto {
  @ApiProperty()
  VT_out: string;

  @ApiProperty()
  VS_in: string;

  @ApiProperty()
  VR_in: string;

  @ApiProperty()
  IT_in: string;

  @ApiProperty()
  IS_in: string;

  @ApiProperty()
  IR_in: string;

  @ApiProperty()
  VOUT: string;

  @ApiProperty()
  IOUT: string;

  @ApiProperty()
  IBATT: string;

  @ApiProperty()
  indicators_keys: string;

  @ApiProperty()
  appearance: string;

  @ApiProperty()
  temperature: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  descriptions: string;

}

export class PowerTable5Dto {
  @ApiProperty()
  VT_out: string;

  @ApiProperty()
  VS_out: string;

  @ApiProperty()
  VR_out: string;

  @ApiProperty()
  IT_out: string;

  @ApiProperty()
  IS_out: string;

  @ApiProperty()
  IR_out: string;

  @ApiProperty()
  F_out: string;

  @ApiProperty()
  VBATT: string;

  @ApiProperty()
  IBATT: string;

  @ApiProperty()
  indicators_keys: string;

  @ApiProperty()
  appearance: string;

  @ApiProperty()
  temperature: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  descriptions: string;

}

export class PowerTable6Dto {
  @ApiProperty()
  VOUT: string;

  @ApiProperty()
  IOUT: string;

  @ApiProperty()
  V_in: string;

  @ApiProperty()
  I_in: string;

  @ApiProperty()
  indicators_keys: string;

  @ApiProperty()
  appearance: string;

  @ApiProperty()
  temperature: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  descriptions: string;

}

export class SwitchFormDto {
  @ApiProperty()
  names: string[];

  @ApiProperty()
  reportDate: string;

  @ApiProperty()
  day: string;

  @ApiProperty()
  comments: string;

  @ApiProperty()
  bandwidth: string;

  @ApiProperty()
  data_status: boolean;

  @ApiProperty()
  log_review: boolean;

  @ApiProperty()
  network_traffic: boolean;

  @ApiProperty()
  sensor_status: boolean;

  @ApiProperty()
  switch_status: boolean;

  @ApiProperty()
  RCVTrafficFile: boolean;

  @ApiProperty()
  ProcessTrafficFile: boolean;

  @ApiProperty()
  RCVChargingFile: boolean;

  @ApiProperty()
  hf_archive: string;

  @ApiProperty()
  humidity: string;

  @ApiProperty()
  sg_oper: string;

  @ApiProperty()
  temperature: string;

  @ApiProperty()
  tm_mnt_pcm: string;

  @ApiProperty()
  tm_mnt_port: string;
}

export class MuxFormDto {
  @ApiProperty()
  names: string[];

  @ApiProperty()
  reportDate: string;

  @ApiProperty()
  day: string;

  @ApiProperty()
  comments: string;

  @ApiProperty()
  dailyReportChecking: string;

  @ApiProperty()
  phoneLineChecking: string;

  @ApiProperty()
  temperature: string;

  @ApiProperty()
  cleaning: string;

  @ApiProperty()
  reports: MuxReportsDto[];

  @ApiProperty()
  missionReports: MuxMissionReportsDto[];

  @ApiProperty()
  alarms: MuxTableDto;

  @ApiProperty()
  network: MuxTableDto;

  @ApiProperty()
  NE: MuxTableDto;

  @ApiProperty()
  controlCenter: MuxTableDto;

  @ApiProperty()
  routers: MuxTableDto;

  @ApiProperty()
  speakerBuzzer: MuxTableDto;

  @ApiProperty()
  antiVirous: MuxTableDto;

  @ApiProperty()
  Ur: MuxTableDto;

  @ApiProperty()
  UPS: MuxTableDto;

}

export class FacilitiesFormDto {
  @ApiProperty()
  names: string[];

  @ApiProperty()
  reportDate: string;

  @ApiProperty()
  day: string;

  @ApiProperty()
  comments: string;

  @ApiProperty()
  reports: FacilitiesReportsDto[];
}

export class FiberFormDto {
  @ApiProperty()
  names: string[];

  @ApiProperty()
  reportDate: string;

  @ApiProperty()
  day: string;

  @ApiProperty()
  comments: string;

  @ApiProperty()
  table1: FiberTable1Dto[];

  @ApiProperty()
  table2: FiberTable2Dto[];

  @ApiProperty()
  table3: FiberTable3Dto[];
}

export class PowerFormDto {
  @ApiProperty()
  names: string[];

  @ApiProperty()
  reportDate: string;

  @ApiProperty()
  day: string;

  @ApiProperty()
  comments: string;

  @ApiProperty()
  diesel_generator_1: PowerTable1Dto;

  @ApiProperty()
  diesel_generator_2: PowerTable1Dto;

  @ApiProperty()
  EMP1: PowerTable2Dto;

  @ApiProperty()
  EMP2: PowerTable2Dto;

  @ApiProperty()
  MP: PowerTable2Dto;

  @ApiProperty()
  capacitor: PowerTable3Dto;

  @ApiProperty()
  REC1: PowerTable4Dto;

  @ApiProperty()
  REC2: PowerTable4Dto;

  @ApiProperty()
  REC3: PowerTable4Dto;

  @ApiProperty()
  REC4: PowerTable4Dto;

  @ApiProperty()
  UPS_Newave: PowerTable5Dto;

  @ApiProperty()
  UPS_Riello: PowerTable5Dto;

  @ApiProperty()
  CONVERTOR: PowerTable6Dto;

  @ApiProperty()
  INVERTOR: PowerTable6Dto;
}

export class GetFormByIdDto {
  @ApiProperty()
  formId: string;

  @ApiProperty()
  role: string;
}

export class UpdateFormByIdDto {
  @ApiProperty()
  formId: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  form: SwitchFormDto | PowerFormDto | FiberFormDto | FacilitiesFormDto | MuxFormDto;
}

export class DeleteFormByIdDto {
  @ApiProperty()
  formId: string;

  @ApiProperty()
  role: string;
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

export class getTempretureHumidityDto {
  @ApiProperty()
  temperature: number;

  @ApiProperty()
  humidity: number;

  @ApiProperty()
  reportDate: string;

  @ApiProperty()
  day: string;
}

export class getBandwidthDto {
  @ApiProperty()
  bandwidth: number;

  @ApiProperty()
  reportDate: string;

  @ApiProperty()
  day: string;
}

export class GetFormsByRoleDto {
  @ApiProperty()
  role: string;
}

export class GetFormsByRoleResultDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  reportDate: string;
}

export class CreateFormDto {
  @ApiProperty()
  role: string;

  @ApiProperty()
  form: SwitchFormDto | PowerFormDto | FiberFormDto | FacilitiesFormDto | MuxFormDto;
}

