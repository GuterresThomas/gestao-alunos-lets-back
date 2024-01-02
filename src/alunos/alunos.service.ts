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
        private readonly alunoRepository: Repository<Aluno>,
    ) {}

  async findAll(): Promise<Aluno[]> {
    return this.alunoRepository.find();
  }

  async findOne(id: number): Promise<Aluno> {
    return this.alunoRepository.findOne({ where: { id } });
  }

  async create(aluno: Partial<Aluno>): Promise<Aluno> {
    const newAluno = this.alunoRepository.create(aluno);
    return this.alunoRepository.save(newAluno);
  }

  
 
  async update(id: number, alunoToUpdate: Partial<Aluno>): Promise<UpdateResult> {
    if (Object.keys(alunoToUpdate).length === 0) {
      // Verificar se o objeto recebido para atualização está vazio
      throw new BadRequestException('Nenhum dado fornecido para atualização.');
    }

    return this.alunoRepository.update(id, alunoToUpdate);
  }

  async delete(id: number): Promise<void> {
    await this.alunoRepository.delete(id);
  }
}