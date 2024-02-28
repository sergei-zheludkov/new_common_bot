import {
  IsString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { FeedbackStatusEnum } from '@common_bot/shared';

class FeedbackUpdateDto {
  @ApiProperty({
    required: true,
    example: '13600338317425362',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    required: false,
    example: '258000010',
  })
  @IsOptional()
  @IsString()
  support_id: string;

  @ApiProperty({
    required: false,
    example: 'Created task for development',
  })
  @IsOptional()
  @IsString()
  text: string;

  @ApiProperty({
    required: true,
    enum: FeedbackStatusEnum,
  })
  @IsNotEmpty()
  @IsEnum(FeedbackStatusEnum)
  status: FeedbackStatusEnum;
}

export { FeedbackUpdateDto };
