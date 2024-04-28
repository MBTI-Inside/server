export interface ISurvey {
  get getId(): string;
  get properties(): ISurveyProperties;
  set setAnswer(answer: IAnswer[]);
  set setSubject(subject: string);
}

export interface ISurveyProperties {
  id?: string;
  subject: string;
  answer: IAnswer[];
}

export interface IAnswer {
  type: string;
  select: string;
  proportion: number;
}

export class Survey implements ISurvey {
  private id?: string;
  private subject: string;
  answer: IAnswer[];

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
      answer: this.answer
    };
  }

  set setAnswer(answer: IAnswer[]) {
    this.answer = answer;
  }

  set setSubject(subject: string) {
    this.subject = subject;
  }
}
