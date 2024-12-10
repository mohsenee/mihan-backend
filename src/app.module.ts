import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/users.entity';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
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
  TypeOrmModule.forFeature([UserEntity]),
  UsersModule,
  FormsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
