import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsEnum, IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BotLanguageEnum, GenderEnum } from '@common_bot/shared';

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
    nullable: true,
    example: '258000010',
  })
  @IsOptional()
  @IsString()
  who_invited_id?: string;

  @ApiProperty({
    required: true,
    enum: BotLanguageEnum,
  })
  @IsNotEmpty()
  @IsEnum(BotLanguageEnum)
  lang: BotLanguageEnum;

  @ApiProperty({
    required: false,
    nullable: true,
    enum: GenderEnum,
  })
  @IsOptional()
  @IsEnum(GenderEnum)
  gender?: GenderEnum;

  @ApiProperty({
    required: false,
    example: 600,
  })
  @IsOptional()
  @IsNumber()
  timezone?: number;
}

export { UserCreateDto };
