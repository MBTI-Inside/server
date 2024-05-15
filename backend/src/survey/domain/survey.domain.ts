export interface IAnswer {
  type: string;
  content: string;
  proportion: number;
}

export enum MbtiType {
  energy = 'energy',
  awareness = 'awareness',
  judgement = 'judgement',
  life = 'life'
}
export interface ISurveyProperties {
  id?: string;
  subject: string;
  answer: IAnswer[];
  mbtiType: MbtiType;
}

export interface ISurvey {
  get getId(): string;
  get properties(): ISurveyProperties;
  set setAnswer(answer: IAnswer[]);
  set setSubject(subject: string);
  set setMbtiType(mbtiType: MbtiType);
}

export class Survey implements ISurvey {
  private id?: string;
  private subject: string;
  private answer: IAnswer[];
  private mbtiType: MbtiType;

  private constructor(properties: ISurveyProperties) {
    Object.assign(this, properties);
  }

  static new(properties: ISurveyProperties) {
    return new Survey(properties);
  }

  get getId(): string {
    return this.id;
  }

  get properties(): ISurveyProperties {
    return {
      id: this.id,
      subject: this.subject,
      answer: this.answer,
      mbtiType: this.mbtiType
    };
  }

  set setAnswer(answer: IAnswer[]) {
    this.answer = answer;
  }

  set setSubject(subject: string) {
    this.subject = subject;
  }

  set setMbtiType(mbtiType: MbtiType) {
    this.mbtiType = mbtiType;
  }
}
