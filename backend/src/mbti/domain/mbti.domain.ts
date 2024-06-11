export interface IMbti {
  get getId(): string;
  get properties(): IMbtiProperties;
  set setMbti(mbti: string);
  set setSummary(summary: string);
  set setCount(count: number);
  set setTags(tags: string[]);
  set setDescription(description: string);
  set setGoodCompatibilityId(goodCompatibilityId: string);
  set setBadCompatibilityId(badCompatibilityId: string);
}

export interface IMbtiProperties {
  id?: string;
  mbti: string;
  summary: string;
  count?: number;
  tags: string[];
  description: string;
  goodCompatibilityId: string;
  badCompatibilityId: string;
}

export class Mbti implements IMbti {
  private id?: string;
  private mbti: string;
  private summary: string;
  private count = 0;
  private tags: string[];
  private description: string;
  private goodCompatibilityId: string;
  private badCompatibilityId: string;

  private constructor(properties: IMbtiProperties) {
    Object.assign(this, properties);
  }

  static new(properties: IMbtiProperties) {
    return new Mbti(properties);
  }

  get getId(): string {
    return this.id;
  }
  get properties(): IMbtiProperties {
    return {
      id: this.id,
      mbti: this.mbti,
      summary: this.summary,
      count: this.count,
      tags: this.tags,
      description: this.description,
      goodCompatibilityId: this.goodCompatibilityId,
      badCompatibilityId: this.badCompatibilityId
    };
  }

  set setMbti(mbti: string) {
    this.mbti = mbti;
  }

  set setSummary(summary: string) {
    this.summary = summary;
  }

  set setCount(count: number) {
    this.count = count;
  }

  set setTags(tags: string[]) {
    this.tags = tags;
  }

  set setDescription(description: string) {
    this.description = description;
  }

  set setGoodCompatibilityId(goodCompatibilityId: string) {
    this.goodCompatibilityId = goodCompatibilityId;
  }

  set setBadCompatibilityId(badCompatibilityId: string) {
    this.badCompatibilityId = badCompatibilityId;
  }
}
