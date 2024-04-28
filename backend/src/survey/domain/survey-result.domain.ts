export interface IResults {
  surveyId: string;
  answer: string;
  proportion: number;
  select: string;
  type: string;
}

export interface ISurveyResultProperties {
  id?: string;
  userId: string;
  results: IResults[];
  finalType: string;
  finalTypeProportion: number;
}

export interface ISurveyResult {
  get properties(): ISurveyResultProperties;
  get getId(): string;
}

export class SurveyResult implements ISurveyResult {
  private id?: string;
  private userId: string;
  private results: IResults[];
  private finalType: string;
  private finalTypeProportion: number;

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
      results: this.results,
      finalType: this.finalType,
      finalTypeProportion: this.finalTypeProportion
    };
  }

  get getId(): string {
    return this.id;
  }
}
