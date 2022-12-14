import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('STATUS')
export class Status {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  desc: string;
}
