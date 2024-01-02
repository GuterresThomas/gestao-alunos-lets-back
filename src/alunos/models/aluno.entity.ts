import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: string;

  @Column()
  objetivos: string;

  @Column()
  menos_consciencia_corporal: boolean;

  @Column()
  menos_adaptado: boolean;

  @Column()
  mais_dor: boolean;

  @Column()
  menos_gesto_tecnico: boolean;

  @Column()
  menos_forca: boolean;

  @Column()
  menos_mobilidade: boolean;

  @Column()
  menos_resistencia: boolean;

  @Column()
  menos_equilibrio: boolean;

  @Column()
  mais_ou_menos_consciencia_corporal: boolean;

  @Column()
  mais_ou_menos_adaptado: boolean;

  @Column()
  mais_ou_menos_dor: boolean;

  @Column()
  mais_ou_menos_gesto_tecnico: boolean;

  @Column()
  mais_ou_menos_forca: boolean;

  @Column()
  mais_ou_menos_mobilidade: boolean;

  @Column()
  mais_ou_menos_resistencia: boolean;

  @Column()
  mais_ou_menos_equilibrio: boolean;

  @Column()
  mais_consciencia_corporal: boolean;

  @Column()
  mais_adaptado: boolean;

  @Column()
  menos_dor: boolean;

  @Column()
  mais_gesto_tecnico: boolean;

  @Column()
  mais_forca: boolean;

  @Column()
  mais_mobilidade: boolean;

  @Column()
  mais_resistencia: boolean;

  @Column()
  mais_equilibrio: boolean;

  @Column({ type: 'varchar', length: 100, default: '' })
  observacoes: string;
}
