import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleEnum } from '../../types/role.enum';
import { LangEnum } from '../../types/lang.enum';

@Entity('users')
class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  firstname?: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  lastname?: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  username?: string;

  @Column({
    type: 'int',
    default: 0,
  })
  balance: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  who_invited?: string;

  @Column({
    type: 'int',
    default: 0,
  })
  referral_counter: number;

  @Column({
    type: 'int',
    default: 0,
  })
  referral_money: number;

  @Column({
    type: 'enum',
    enum: LangEnum,
    default: LangEnum.ENGLISH,
  })
  lang: string;

  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.USER,
  })
  role: string;

  @Column({
    type: 'int',
    default: 600,
  })
  reminder_time: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}

export { UserEntity };
