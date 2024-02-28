import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { FeedbackFilesTypeEnum } from '@common_bot/shared';

class FeedbackFilesCreateDto {
  @ApiProperty({
    required: true,
    example: 'AgACAgIAAxkBAAIVb2VOFv4Imec7PVIve4JdiQABQCRSegACDdgxG5ERcEr65sylfrcRDgEAAwIAA3MAAzME',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    required: true,
    enum: FeedbackFilesTypeEnum,
  })
  @IsNotEmpty()
  @IsEnum(FeedbackFilesTypeEnum)
  type: FeedbackFilesTypeEnum;
}

export { FeedbackFilesCreateDto };
