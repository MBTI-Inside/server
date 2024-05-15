import {
  IAwareness,
  IEnergy,
  IJudgement,
  ILife
} from 'src/survey/domain/survey-result.domain';

export class CreateSurveyResultCommand {
  constructor(
    readonly userId: string,
    readonly mbti: string,
    readonly tags: string[],
    readonly description: string,
    readonly goodCompatibilityId: string,
    readonly badCompatibilityId: string,
    readonly energy: IEnergy[],
    readonly awareness: IAwareness[],
    readonly judgement: IJudgement[],
    readonly life: ILife[]
  ) {}
}
