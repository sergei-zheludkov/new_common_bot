import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { RoleEnum } from '../../types/role.enum';
import { LangEnum } from '../../types/lang.enum';

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar" })
  firstname: string;

  @Column({ type: "varchar" })
  lastname: string;

  @Column({
    type: "varchar",
    unique: true,
  })
  username: string;

  @Column({ type: 'int' })
  balance: number;

  @ManyToOne(() => User)
  @JoinColumn()
  who_invite: string;

  @Column({ type: 'int' })
  referral_counter: number;

  @Column({ type: 'int' })
  referral_money: number;

  @Column({
    type: "enum",
    enum: LangEnum,
    default: LangEnum.EN,
  })
  lang: string;

  @Column({
    type: "enum",
    enum: RoleEnum,
    default: RoleEnum.USER,
  })
  role: string;

  @Column({ type: 'int' })
  reminder_time: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}

export { User };