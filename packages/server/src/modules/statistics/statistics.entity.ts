import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity("statistics")
export class Statistics {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "int" })
  users: number;

  @Column({ type: "simple-json" })
  payments: {
    [key: string]: {
      total: number,
      amount: number
    }
  };

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}