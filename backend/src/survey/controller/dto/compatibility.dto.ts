import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import {
  CompatibilityType,
  ICompatibilityProperties
} from 'src/survey/domain/compatibility.domain';

export class CreateCompatibilityDto {
  @ApiProperty({ enum: CompatibilityType, required: true })
  @IsEnum(CompatibilityType)
  type: CompatibilityType;

  @ApiProperty({ required: true })
  @IsString()
  mbti: string;

  @ApiProperty({ required: true })
  @IsString()
  targetMbti: string;

  @ApiProperty({ required: true })
  @IsString()
  description: string;
}

export class UpdateCompatibilityDto {
  @ApiProperty({ enum: CompatibilityType })
  @IsEnum(CompatibilityType)
  @IsOptional()
  type?: CompatibilityType;

  @ApiProperty()
  @IsString()
  @IsOptional()
  mbti?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  targetMbti?: string;

  @IsString()
  @IsOptional()
  description?: string;
}

export class CompatibilityResponse implements ICompatibilityProperties {
  @ApiProperty()
  id: string;

  @ApiProperty({ enum: CompatibilityType })
  type: CompatibilityType;

  @ApiProperty()
  mbti: string;

  @ApiProperty()
  targetMbti: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}
