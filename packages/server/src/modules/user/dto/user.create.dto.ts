import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LangEnum } from '../../../types/lang.enum';

class UserCreateDto {
  @ApiProperty({
    required: true,
    example: '258000010',
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
    example: '258000010',
  })
  @IsOptional()
  @IsString()
  who_invited?: string;

  @ApiProperty({
    required: true,
    enum: LangEnum,
  })
  @IsNotEmpty()
  @IsEnum(LangEnum)
  lang: string;
}

export { UserCreateDto };
