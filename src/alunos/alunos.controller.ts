/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    NotFoundException,
    HttpCode,
    Logger
  } from '@nestjs/common';
  import { AlunosService } from './alunos.service';
  import { Aluno } from './models/aluno.entity';
  
@Controller('alunos')
export class AlunosController {
    private readonly logger = new Logger(AlunosService.name);

    constructor(private readonly alunosService: AlunosService) {}

    @Get()
    async findAll(): Promise<Aluno[]> {
      return this.alunosService.findAll();
    }

    
    @Get(':id')
    async findById(@Param('id') id: number): Promise<Aluno | { message: string }> {
        const paciente = await this.alunosService.findOne(id);
        if (!paciente) {
            throw new NotFoundException('Paciente não encontrado');
        }
        return paciente;
    }
  
    @Post()
    @HttpCode(201) 
    async create(@Body() aluno: Aluno): Promise<Aluno> {
      const createdAluno = await this.alunosService.create(aluno);
      return createdAluno;
    }
    
    @Put(':id')
    async update(@Param('id') id: number, @Body() alunoToUpdate: Partial<Aluno>): Promise<Aluno | { message: string }> {
      const existingAluno = await this.alunosService.findOne(id);
    
      if (!existingAluno) {
        throw new NotFoundException('Aluno não encontrado');
      }
    
      // Log para visualizar o objeto recebido na requisição
      this.logger.log(`Objeto recebido para atualização: ${JSON.stringify(alunoToUpdate)}`);
    
      // Atualiza apenas as propriedades do aluno que foram enviadas na requisição
      await this.alunosService.update(id, alunoToUpdate);
    
      // Retorna o aluno atualizado
      const updatedAluno = await this.alunosService.findOne(id);
      return updatedAluno;
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      const aluno = await this.alunosService.findOne(id);
  
      if (!aluno) {
        throw new NotFoundException('Aluno com id inexistente.');
      }
  
      await this.alunosService.delete(id);
      return { message: 'Aluno deletado com sucesso.' };
    }
}
