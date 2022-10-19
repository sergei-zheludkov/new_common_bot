import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { LangEnum } from '../../../types/lang.enum';

class UserCreateDto {
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
  @IsString()
  who_invited?: string;

  @IsNotEmpty()
  @IsEnum(LangEnum)
  lang: string;
}

export { UserCreateDto };
