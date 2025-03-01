import { Module } from '@nestjs/common';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwitchFormEntity, MuxFormEntity, FacilitiesFormEntity, FiberFormEntity, PowerFormEntity } from './forms.entity';

@Module({
  controllers: [FormsController],
   imports: [TypeOrmModule.forFeature([SwitchFormEntity, MuxFormEntity, FacilitiesFormEntity, FiberFormEntity, PowerFormEntity])],
  providers: [FormsService],
  exports: [FormsService]
})
export class FormsModule {}
