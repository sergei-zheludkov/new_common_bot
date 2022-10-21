import {
  IsOptional,
  IsNumber,
  IsString,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LangEnum } from '../../../types/lang.enum';

class UserUpdateDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    required: false,
    example: 'Sergei',
  })
  @IsOptional()
  @IsString()
  firstname?: string;

  @ApiProperty({
    required: false,
    example: 'Zheludkov',
  })
  @IsOptional()
  @IsString()
  lastname?: string;

  @ApiProperty({
    required: false,
    example: 'sergozheludkov',
  })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({
    required: false,
    example: 2000,
  })
  @IsOptional()
  @IsNumber()
  balance?: number;

  @ApiProperty({
    required: false,
    example: 5,
  })
  @IsOptional()
  @IsNumber()
  referral_counter?: number;

  @ApiProperty({
    required: false,
    example: 300,
  })
  @IsOptional()
  @IsNumber()
  referral_money?: number;

  @ApiProperty({
    required: false,
    enum: LangEnum,
  })
  @IsOptional()
  @IsEnum(LangEnum)
  lang?: string;

  @ApiProperty({
    required: false,
    example: 600,
  })
  @IsOptional()
  @IsNumber()
  reminder_time?: number;
}

export { UserUpdateDto };
