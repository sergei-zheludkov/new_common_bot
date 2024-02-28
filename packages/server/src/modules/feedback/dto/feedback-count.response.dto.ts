import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class FeedbackCountResponseDto {
  @ApiProperty({
    required: false,
    example: 10,
  })
  @IsOptional()
  @IsNumber()
  waiting?: number;

  @ApiProperty({
    required: false,
    example: 4,
  })
  @IsOptional()
  @IsNumber()
  processing?: number;

  @ApiProperty({
    required: false,
    example: 3,
  })
  @IsOptional()
  @IsNumber()
  done?: number;
}

export { FeedbackCountResponseDto };
