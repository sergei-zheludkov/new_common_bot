import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageEnum } from '@common_bot/shared';

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
    nullable: true,
  })
  @IsOptional()
  @IsString()
  who_invited?: string;

  @ApiProperty({
    required: true,
    enum: LanguageEnum,
  })
  @IsNotEmpty()
  @IsEnum(LanguageEnum)
  lang: string;
}

export { UserCreateDto };
