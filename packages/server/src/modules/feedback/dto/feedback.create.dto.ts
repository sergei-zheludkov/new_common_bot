import {
  IsString,
  IsArray,
  IsEnum,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MessageTypeEnum } from '@common_bot/shared';
import { FeedbackFilesCreateDto } from '../../feedback-files/dto';

class FeedbackCreateDto {
  @ApiProperty({
    required: true,
    example: '13600338317425362',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    required: false,
    example: 'I am writing to request your assistance concerning the matter of ... I hope that my request will not inconvenience you too much.',
  })
  @IsOptional()
  @IsString()
  text?: string;

  @ApiProperty({
    type: () => [FeedbackFilesCreateDto],
    required: false,
  })
  @IsOptional()
  @IsArray()
  feedback_files?: Array<FeedbackFilesCreateDto>;

  @ApiProperty({
    required: true,
    example: '258000010',
  })
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @ApiProperty({
    required: true,
    enum: MessageTypeEnum,
  })
  @IsNotEmpty()
  @IsEnum(MessageTypeEnum)
  type: MessageTypeEnum;
}

export { FeedbackCreateDto };
