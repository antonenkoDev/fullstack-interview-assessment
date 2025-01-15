import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  // Missing priority field that needs to be added via migration
  // @Column({ type: 'enum', enum: ['LOW', 'MEDIUM', 'HIGH'], default: 'MEDIUM' })
  // priority: string;
}
