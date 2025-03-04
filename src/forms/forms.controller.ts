import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Put,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FormsService } from './forms.service';
import {
  SwitchFormDto,
  GetFormByIdDto,
  DeleteFormByIdDto,
  GetFormsByRoleDto,
  UpdateFormByIdDto,
  CreateFormDto,
  GetFormsByRoleAndDateDto,
} from './forms.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}


  @UseGuards(JwtAuthGuard)
  @Get('getFormById')
  getFormById(@Query() dto: GetFormByIdDto, @Request() req) {
    console.log(`User with ID ${req.user.userId} is requesting form with ID ${dto.formId}`);
    return this.formsService.getFormById(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('updateFormById/:id')
  updateFormById(
    @Param('id') id: string,
    @Body() body: UpdateFormByIdDto,
    @Request() req,
  ) {
    console.log(`User with ID ${req.user.userId} is updating form with ID ${id}`);
    return this.formsService.updateFormById(id, body);
  }

  @UseGuards(JwtAuthGuard) 
  @Delete('deleteFormById')
  async deleteFormById(@Query() dto: DeleteFormByIdDto) {
    return this.formsService.deleteFormById(dto);
  }


  @Get('getTemperatureHumidityForLastMonth')
  getTemperatureHumidityForLastMonth() {
    return this.formsService.getTemperatureHumidityForLastMonth();
  }

  @Get('getBandwidthForLastMonth')
  getBandwidthForLastMonth() {
    return this.formsService.getBandwidthForLastMonth();
  }

  @UseGuards(JwtAuthGuard)
  @Get('getFormsByRole')
  getFormsByRole(@Query() dto: GetFormsByRoleDto, @Request() req) {
    console.log(
      `User ${req.user.userId} ${req.user.userName} requested forms for role: ${req.user.role}`,
    );
    return this.formsService.getFormsByRole(dto);
  }

  @Get('getFormsByRoleAndDate')
  getFormsByRoleAndDate(@Query() dto: GetFormsByRoleAndDateDto) {
    return this.formsService.getFormsByRoleAndDate(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('createForm')
  async createForm(@Body() body: CreateFormDto) {
    return this.formsService.createForm(body);
  }

}
