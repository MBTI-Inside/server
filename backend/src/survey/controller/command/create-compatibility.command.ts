import { CompatibilityType } from 'src/survey/domain/compatibility.domain';

export class CreateCompatibilityCommand {
  constructor(
    readonly type: CompatibilityType,
    readonly mbti: string,
    readonly targetMbti: string,
    readonly description: string
  ) {}
}
