import { Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';

@Module({
  providers: [AlunosService]
})
export class AlunosModule {}
