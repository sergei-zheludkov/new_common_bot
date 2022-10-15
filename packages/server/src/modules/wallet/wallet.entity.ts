import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WalletEnum } from '../../types/wallet.enum';

@Entity('wallets')
class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: WalletEnum,
  })
  type: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  number: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  token: string;

  @Column({ type: 'boolean' })
  is_active: boolean;

  @Column({ default: 0 })
  input_money: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}

export { Wallet };
