import { IAnswer, MbtiType } from 'src/survey/domain/survey.domain';

export class CreateSurveyCommand {
  constructor(
    readonly subject: string,
    readonly answer: IAnswer[],
    readonly mbtiType: MbtiType
  ) {}
}
