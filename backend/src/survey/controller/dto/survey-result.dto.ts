import { Type } from 'class-transformer';
import { IsString, ValidateNested, IsEnum, IsNumber } from 'class-validator';

export class CreateSurveyResultDto {
  @IsString()
  userId: string;

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

  @ValidateNested({ each: true })
  @Type(() => EnergyDto)
  energy: EnergyDto[];

  @ValidateNested({ each: true })
  @Type(() => AwarenessDto)
  awareness: AwarenessDto[];

  @ValidateNested({ each: true })
  @Type(() => JudgementDto)
  judgement: JudgementDto[];

  @ValidateNested({ each: true })
  @Type(() => LifeDto)
  life: LifeDto[];
}

export enum EnergyType {
  I = 'I',
  E = 'E'
}

export enum AwarenessType {
  N = 'N',
  S = 'S'
}

export enum JudgementType {
  T = 'T',
  F = 'F'
}

export enum LifeType {
  J = 'J',
  P = 'P'
}

export class MbtiResultDto {
  @IsNumber()
  proportion: number;
}

export class EnergyDto extends MbtiResultDto {
  @IsEnum(EnergyType)
  type: EnergyType;
}

export class AwarenessDto extends MbtiResultDto {
  @IsEnum(AwarenessType)
  type: AwarenessType;
}

export class JudgementDto extends MbtiResultDto {
  @IsEnum(JudgementType)
  type: JudgementType;
}

export class LifeDto extends MbtiResultDto {
  @IsEnum(LifeType)
  type: LifeType;
}
