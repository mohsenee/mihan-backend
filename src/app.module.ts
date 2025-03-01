import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/users.entity';
import { FormsModule } from './forms/forms.module';
import { SwitchFormEntity, MuxFormEntity, FacilitiesFormEntity, FiberFormEntity, PowerFormEntity } from './forms/forms.entity';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';  
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'mihan-db',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        'dist/**/*.entity{.ts,.js}',
        'dist/**/entities/*.entity{.ts,.js}',
      ],
      logging: true,
    }),
    TypeOrmModule.forFeature([UserEntity, SwitchFormEntity, MuxFormEntity, FacilitiesFormEntity, FiberFormEntity, PowerFormEntity]),
    UsersModule,
    FormsModule,
    ConfigModule.forRoot({
      isGlobal: true,  // Makes ConfigModule globally available
      envFilePath: '.env',  // Ensure you have .env file for env variables
    }),
   
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}
