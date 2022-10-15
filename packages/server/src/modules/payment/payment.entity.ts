import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Wallet } from '../wallet/wallet.entity';

@Entity('payments')
class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Wallet)
  @JoinColumn()
  wallet: Wallet;

  // RUB | USD | EUR | KZT
  @Column({
    type: 'varchar',
    length: 3,
  })
  currency: string;

  @Column({ type: 'int' })
  amount: number;

  /*
    qiwi - 7 981 555 1110
    yoomoney - 4100 7777 2222 999
    webmoney - 2134 5555 2299
  */
  @Column({ type: 'varchar' })
  user_wallet_number: string;

  /*
    ожидаемая сумма в разных валютах
    usd цент/eur цент/rub копейки/kzt тиын
    1000/900/75000/427000
  */
  @Column({ type: 'int' })
  expected_amount: number;

  @Column({ type: 'varchar' })
  comment: string;

  @Column({ type: 'boolean' })
  is_paid: boolean;

  @ManyToOne(() => User)
  @JoinColumn()
  referral: User;

  @Column({ type: 'int' })
  referral_money: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}

export { Payment };
