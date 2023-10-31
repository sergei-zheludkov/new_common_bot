import {
  Entity,
  Column,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GenderEnum, RoleEnum, BotLanguageEnum } from '@common_bot/shared';

@Entity('users')
class UserEntity {
  @ApiProperty({
    example: '258000010',
  })
  @PrimaryColumn()
  id: string;

  @ApiProperty({
    example: 'Sergei',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    nullable: true,
  })
  firstname?: string;

  @ApiProperty({
    example: 'Zheludkov',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    nullable: true,
  })
  lastname?: string;

  @ApiProperty({
    example: 'sergozheludkov',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    example: 2000,
  })
  @Column({
    type: 'int',
    default: 0,
  })
  balance: number;

  @ApiProperty({
    // eslint-disable-next-line no-use-before-define
    type: UserEntity,
    nullable: true,
  })
  @ManyToOne(() => UserEntity, {
    nullable: true,
  })
  @JoinColumn({
    name: 'who_invited_id',
  })
  who_invited?: string;

  @ApiProperty({
    example: 5,
  })
  @Column({
    type: 'int',
    default: 0,
  })
  referral_counter: number;

  @ApiProperty({
    example: 300,
  })
  @Column({
    type: 'int',
    default: 0,
  })
  referral_money: number;

  @ApiProperty({
    enum: BotLanguageEnum,
  })
  @Column({
    type: 'enum',
    enum: BotLanguageEnum,
    default: BotLanguageEnum.ENGLISH,
  })
  lang: BotLanguageEnum;

  @ApiProperty({
    enum: RoleEnum,
  })
  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.USER,
  })
  role: RoleEnum;

  @ApiProperty({
    enum: GenderEnum,
    nullable: true,
  })
  @Column({
    type: 'enum',
    nullable: true,
    enum: GenderEnum,
  })
  gender?: GenderEnum;

  @ApiProperty({
    example: 600,
    nullable: true,
  })
  @Column({
    type: 'int',
    nullable: true,
  })
  timezone?: number;

  @ApiProperty({
    example: 600,
  })
  @Column({
    type: 'int',
    default: 600,
  })
  reminder_time: number;

  @ApiProperty({
    example: '2022-10-21T19:48:59.726Z',
  })
  @CreateDateColumn()
  created: Date;

  @ApiProperty({
    example: '2022-10-21T19:48:59.726Z',
  })
  @UpdateDateColumn()
  updated: Date;
}

export { UserEntity };
