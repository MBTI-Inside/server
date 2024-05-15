import { CompatibilityType } from 'src/survey/domain/compatibility.domain';

export class UpdateCompatibilityCommand {
  constructor(
    readonly compatibilityId: string,
    readonly type?: CompatibilityType,
    readonly mbti?: string,
    readonly targetMbti?: string,
    readonly description?: string
  ) {}
}
