import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CompatibilityType } from 'src/survey/domain/compatibility.domain';

export class CreateCompatibilityDto {
  @IsEnum(CompatibilityType)
  type: CompatibilityType;

  @IsString()
  mbti: string;

  @IsString()
  targetMbti: string;

  @IsString()
  description: string;
}

export class UpdateCompatibilityDto {
  @IsEnum(CompatibilityType)
  @IsOptional()
  type?: CompatibilityType;

  @IsString()
  @IsOptional()
  mbti?: string;

  @IsString()
  @IsOptional()
  targetMbti?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
