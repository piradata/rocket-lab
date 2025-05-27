import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  bio: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  userId: string;
}