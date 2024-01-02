/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import {Aluno} from './models/aluno.entity'


@Injectable()
export class AlunosService {
  private readonly logger = new Logger(AlunosService.name);

    constructor(
        @InjectRepository(Aluno) // Injeta o repositório do Aluno
        private readonly alunosRepository: Repository<Aluno>,
    ) {}

  async findAll(): Promise<Aluno[]> {
    return this.alunosRepository.find();
  }

  async findOne(id: number): Promise<Aluno> {
    return this.alunosRepository.findOne({ where: { id } });
  }

  async create(aluno: Partial<Aluno>): Promise<Aluno> {
    const newAluno = this.alunosRepository.create(aluno);
    return this.alunosRepository.save(newAluno);
  }

  
 
  async update(id: number, alunoToUpdate: Partial<Aluno>): Promise<UpdateResult> {
    if (Object.keys(alunoToUpdate).length === 0) {
      // Verificar se o objeto recebido para atualização está vazio
      throw new BadRequestException('Nenhum dado fornecido para atualização.');
    }

    return this.alunosRepository.update(id, alunoToUpdate);
  }

  async delete(id: number): Promise<void> {
    await this.alunosRepository.delete(id);
  }
}