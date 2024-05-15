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
}
