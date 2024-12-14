import { Module } from '@nestjs/common';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwitchFormEntity } from './forms.entity';

@Module({
  controllers: [FormsController],
   imports: [TypeOrmModule.forFeature([SwitchFormEntity])],
  providers: [FormsService],
  exports: [FormsService]
})
export class FormsModule {}
