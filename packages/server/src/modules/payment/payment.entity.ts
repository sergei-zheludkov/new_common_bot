import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('payments')
class PaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  // @ManyToOne(() => WalletEntity)
  // @JoinColumn()
  // wallet: WalletEntity;

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

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  referral: UserEntity;

  @Column({ type: 'int' })
  referral_money: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}

export { PaymentEntity };
