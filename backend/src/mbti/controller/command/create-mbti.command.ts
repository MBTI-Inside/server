export class CreateMbtiCommand {
  constructor(
    readonly mbti: string,
    readonly summary: string,
    readonly tags: string[],
    readonly description: string,
    readonly goodCompatibilityId: string,
    readonly badCompatibilityId: string
  ) {}
}
