/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AlunosModule } from './alunos/alunos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    AlunosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
