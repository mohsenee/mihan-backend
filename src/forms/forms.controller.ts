import { Controller, Get, Post, Param, Body, Query, Put } from '@nestjs/common';
import { FormsService } from './forms.service';
import {
  CreateSwitchFormDto,
  UpdateSwitchFormDto,
  GetFormByIdDto,
  DeleteFormByIdDto,
} from './forms.dto';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Get('getAllFormSwitch')
  getAllFormSwitch() {
    return this.formsService.getAllFormSwitch();
  }

  @Get('getSwitchFormById')
  getSwitchFormById(@Query() dto: GetFormByIdDto) {
    return this.formsService.getSwitchFormById(dto.formId);
  }

  @Get('deleteSwitchFormById')
  deleteSwitchFormById(@Query() dto: DeleteFormByIdDto) {
    return this.formsService.deleteSwitchFormById(dto.formId);
  }

  @Post('createSwithForm')
  createSwithForm(@Body() body: CreateSwitchFormDto) {
    return this.formsService.createSwithForm(body);
  }

  @Put('updateSwitchForm/:id')
  updateSwitchForm(@Param('id') id: string, @Body() body: UpdateSwitchFormDto) {
    return this.formsService.updateSwitchForm(id, body);
  }
}
