import {
  IsOptional,
  IsNumber,
  IsString,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { LangEnum } from '../../../types/lang.enum';

class UserUpdateDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  firstname?: string;

  @IsOptional()
  @IsString()
  lastname?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsNumber()
  balance?: number;

  @IsOptional()
  @IsNumber()
  referral_counter?: number;

  @IsOptional()
  @IsNumber()
  referral_money?: number;

  @IsOptional()
  @IsEnum(LangEnum)
  lang?: string;

  @IsOptional()
  @IsNumber()
  reminder_time?: number;
}

export { UserUpdateDto };
