import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('statistics')
class StatisticsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  users: number;

  @Column({ type: 'simple-json' })
  payments: {
    [key: string]: {
      total: number;
      amount: number;
    };
  };

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}

export { StatisticsEntity };
