import { IAnswer } from 'src/survey/domain/survey.domain';

export class UpdateSurveyCommand {
  constructor(
    readonly surveyId: string,
    readonly subject: string,
    readonly answer: IAnswer[]
  ) {}
}
