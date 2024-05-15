import { BadRequestException } from '@nestjs/common';

const ResultsLengthNotValidError = new BadRequestException(
  'Results length is not valid'
);
const ResultsProportionNotValidError = new BadRequestException(
  'Results proportion is not valid'
);
const ResultsTypeNotValidError = new BadRequestException(
  'Results type is not valid'
);

export interface IMbtiResult {
  proportion: number;
}
export interface IEnergy extends IMbtiResult {
  type: 'I' | 'E';
}

export interface IAwareness extends IMbtiResult {
  type: 'N' | 'S';
}

export interface IJudgement extends IMbtiResult {
  type: 'T' | 'F';
}

export interface ILife extends IMbtiResult {
  type: 'J' | 'P';
}

export interface ISurveyResultProperties {
  id?: string;
  userId: string;
  mbti: string;
  tags: string[];
  description: string;
  goodCompatibilityId: string;
  badCompatibilityId: string;
  energy: IEnergy[];
  awareness: IAwareness[];
  judgement: IJudgement[];
  life: ILife[];
}

export interface ISurveyResult {
  get properties(): ISurveyResultProperties;
  get getId(): string;
  validateResults(): void;
}

export class SurveyResult implements ISurveyResult {
  private id?: string;
  private userId: string;
  private mbti: string;
  private tags: string[];
  private description: string;
  private goodCompatibilityId: string;
  private badCompatibilityId: string;
  private energy: IEnergy[];
  private awareness: IAwareness[];
  private judgement: IJudgement[];
  private life: ILife[];

  private constructor(properties: ISurveyResultProperties) {
    Object.assign(this, properties);
  }

  static new(properties: ISurveyResultProperties) {
    return new SurveyResult(properties);
  }

  get properties(): ISurveyResultProperties {
    return {
      id: this.id,
      userId: this.userId,
      mbti: this.mbti,
      tags: this.tags,
      description: this.description,
      goodCompatibilityId: this.goodCompatibilityId,
      badCompatibilityId: this.badCompatibilityId,
      energy: this.energy,
      awareness: this.awareness,
      judgement: this.judgement,
      life: this.life
    };
  }

  get getId(): string {
    return this.id;
  }

  private _validateResultsLength(): boolean {
    return (
      this.energy.length === 2 &&
      this.awareness.length === 2 &&
      this.judgement.length === 2 &&
      this.life.length === 2
    );
  }

  private _validateResultsProportion(): boolean {
    return (
      this.energy.reduce((acc, { proportion }) => acc + proportion, 0) === 1 &&
      this.awareness.reduce((acc, { proportion }) => acc + proportion, 0) ===
        1 &&
      this.judgement.reduce((acc, { proportion }) => acc + proportion, 0) ===
        1 &&
      this.life.reduce((acc, { proportion }) => acc + proportion, 0) === 1
    );
  }

  private _validateResultsType(): boolean {
    return (
      this.energy.every(({ type }) => ['I', 'E'].includes(type)) &&
      this.awareness.every(({ type }) => ['N', 'S'].includes(type)) &&
      this.judgement.every(({ type }) => ['T', 'F'].includes(type)) &&
      this.life.every(({ type }) => ['J', 'P'].includes(type))
    );
  }

  validateResults(): void {
    if (!this._validateResultsLength()) {
      throw ResultsLengthNotValidError;
    }

    if (!this._validateResultsProportion()) {
      throw ResultsProportionNotValidError;
    }

    if (!this._validateResultsType()) {
      throw ResultsTypeNotValidError;
    }
  }
}
