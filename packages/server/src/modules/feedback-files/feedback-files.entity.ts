import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { FeedbackFilesTypeEnum } from '@common_bot/shared';
import { FeedbackEntity } from '../feedback/feedback.entity';

@Entity('feedback_files')
class FeedbackFilesEntity {
  @ApiProperty({
    example: 'AgACAgIAAxkBAAIVb2VOFv4Imec7PVIve4JdiQABQCRSegACDdgxG5ERcEr65sylfrcRDgEAAwIAA3MAAzME',
  })
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @ApiProperty({
    enum: FeedbackFilesTypeEnum,
  })
  @Column({
    type: 'enum',
    enum: FeedbackFilesTypeEnum,
  })
  type: FeedbackFilesTypeEnum;

  @ApiProperty({
    type: String,
    example: '13600338317425362',
  })
  @ManyToOne(() => FeedbackEntity)
  @JoinColumn({
    name: 'feedback_id',
  })
  feedback_id: string;

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

export { FeedbackFilesEntity };
