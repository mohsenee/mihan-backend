import { Module } from '@nestjs/common';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwitchFormEntity, MuxFormEntity, FacilitiesFormEntity, FiberFormEntity, PowerFormEntity, DailyFormMessagesEntity } from './forms.entity';
import { UserEntity } from 'src/users/users.entity';

@Module({
  controllers: [FormsController],
   imports: [TypeOrmModule.forFeature([UserEntity, SwitchFormEntity, MuxFormEntity, FacilitiesFormEntity, FiberFormEntity, PowerFormEntity, DailyFormMessagesEntity])],
  providers: [FormsService],
  exports: [FormsService]
})
export class FormsModule {}
