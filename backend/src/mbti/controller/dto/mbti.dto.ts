import { IsOptional, IsString } from 'class-validator';

export class CreateMbtiDto {
  @IsString()
  mbti: string;

  @IsString()
  summary: string;

  @IsString({ each: true })
  tags: string[];

  @IsString()
  description: string;

  @IsString()
  goodCompatibilityId: string;

  @IsString()
  badCompatibilityId: string;
}

export class UpdateMbtiDto {
  @IsString()
  @IsOptional()
  mbti: string;

  @IsString()
  @IsOptional()
  summary: string;

  @IsString({ each: true })
  @IsOptional()
  tags: string[];

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  goodCompatibilityId: string;

  @IsString()
  @IsOptional()
  badCompatibilityId: string;
}
