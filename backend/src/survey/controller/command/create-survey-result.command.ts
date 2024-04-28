import { IResults } from 'src/survey/domain/survey-result.domain';

export class CreateSurveyResultCommand {
  constructor(
    readonly results: IResults[],
    readonly finalType: string,
    readonly finalTypeProportion: number,
    readonly userId: string
  ) {}
}
