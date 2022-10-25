import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageEnum, RoleEnum } from '@common_bot/shared';

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
    example: '258000010',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    nullable: true,
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
    enum: LanguageEnum,
  })
  @Column({
    type: 'enum',
    enum: LanguageEnum,
    default: LanguageEnum.ENGLISH,
  })
  lang: string;

  @ApiProperty({
    enum: RoleEnum,
  })
  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.USER,
  })
  role: string;

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
