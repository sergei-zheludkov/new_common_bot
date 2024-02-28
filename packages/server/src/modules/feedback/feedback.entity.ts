import {
  Entity,
  Column,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MessageTypeEnum, FeedbackStatusEnum } from '@common_bot/shared';
import { UserEntity } from '../user/user.entity';
import { FeedbackFilesEntity } from '../feedback-files/feedback-files.entity';

@Entity('feedbacks')
class FeedbackEntity {
  @ApiProperty({
    example: '13600338317425362',
  })
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @ApiProperty({
    example: 'I am writing to request your assistance concerning the matter of ... I hope that my request will not inconvenience you too much.',
    nullable: true,
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  text?: string;

  @ApiProperty({
    type: () => [FeedbackFilesEntity],
  })
  @OneToMany(
    () => FeedbackFilesEntity,
    (media) => media.feedback_id,
  )
  @JoinColumn()
  feedback_files: FeedbackFilesEntity[];

  @ApiProperty({
    type: UserEntity,
  })
  @ManyToOne(() => UserEntity)
  @JoinColumn({
    name: 'user_id',
  })
  user: string;

  @ApiProperty({
    type: UserEntity,
    nullable: true,
  })
  @ManyToOne(() => UserEntity, {
    nullable: true,
  })
  @JoinColumn({
    name: 'support_id',
  })
  support?: string;

  @ApiProperty({
    example: 'Created task for development',
    nullable: true,
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  comment?: string;

  @ApiProperty({
    enum: MessageTypeEnum,
  })
  @Column({
    type: 'enum',
    enum: MessageTypeEnum,
  })
  type: MessageTypeEnum;

  @ApiProperty({
    enum: FeedbackStatusEnum,
  })
  @Column({
    type: 'enum',
    enum: FeedbackStatusEnum,
    default: FeedbackStatusEnum.WAITING,
  })
  status: FeedbackStatusEnum;

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

export { FeedbackEntity };
