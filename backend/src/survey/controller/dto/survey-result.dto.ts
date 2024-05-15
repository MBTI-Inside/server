import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested, IsEnum, IsNumber } from 'class-validator';
import { ISurveyResultProperties } from 'src/survey/domain/survey-result.domain';

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
  @ApiProperty({ type: Number, required: true })
  @IsNumber()
  proportion: number;
}

export class EnergyDto extends MbtiResultDto {
  @ApiProperty({ enum: EnergyType, required: true })
  @IsEnum(EnergyType)
  type: EnergyType;
}

export class AwarenessDto extends MbtiResultDto {
  @ApiProperty({ enum: AwarenessType, required: true })
  @IsEnum(AwarenessType)
  type: AwarenessType;
}

export class JudgementDto extends MbtiResultDto {
  @ApiProperty({ enum: JudgementType, required: true })
  @IsEnum(JudgementType)
  type: JudgementType;
}

export class LifeDto extends MbtiResultDto {
  @ApiProperty({ enum: LifeType, required: true })
  @IsEnum(LifeType)
  type: LifeType;
}

export class CreateSurveyResultDto {
  @ApiProperty({ required: true })
  @IsString()
  userId: string;

  @ApiProperty({ required: true })
  @IsString()
  mbti: string;

  @ApiProperty({ required: true })
  @IsString()
  summary: string;

  @ApiProperty({ type: [String], required: true })
  @IsString({ each: true })
  tags: string[];

  @ApiProperty({ required: true })
  @IsString()
  description: string;

  @ApiProperty({ required: true })
  @IsString()
  goodCompatibilityId: string;

  @ApiProperty({ required: true })
  @IsString()
  badCompatibilityId: string;

  @ApiProperty({ type: [EnergyDto], required: true })
  @ValidateNested({ each: true })
  @Type(() => EnergyDto)
  energy: EnergyDto[];

  @ApiProperty({ type: [AwarenessDto], required: true })
  @ValidateNested({ each: true })
  @Type(() => AwarenessDto)
  awareness: AwarenessDto[];

  @ApiProperty({ type: [JudgementDto], required: true })
  @ValidateNested({ each: true })
  @Type(() => JudgementDto)
  judgement: JudgementDto[];

  @ApiProperty({ type: [LifeDto], required: true })
  @ValidateNested({ each: true })
  @Type(() => LifeDto)
  life: LifeDto[];
}

export class SurveyResultResponse implements ISurveyResultProperties {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  mbti: string;

  @ApiProperty({ type: [String] })
  tags: string[];

  @ApiProperty()
  description: string;

  @ApiProperty()
  goodCompatibilityId: string;

  @ApiProperty()
  badCompatibilityId: string;

  @ApiProperty({ type: [EnergyDto] })
  energy: EnergyDto[];

  @ApiProperty({ type: [AwarenessDto] })
  awareness: AwarenessDto[];

  @ApiProperty({ type: [JudgementDto] })
  judgement: JudgementDto[];

  @ApiProperty({ type: [LifeDto] })
  life: LifeDto[];

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}
