export interface ICompatibilityProperties {
  id?: string;
  type: CompatibilityType;
  mbti: string;
  targetMbti: string;
  description: string;
}

export interface ICompatibility {
  get getId(): string;
  get properties(): ICompatibilityProperties;
  set setType(type: CompatibilityType);
  set setMbti(mbti: string);
  set setTargetMbti(targetMbti: string);
  set setDescription(description: string);
}

export enum CompatibilityType {
  goods = 'good',
  bad = 'bad'
}

export class Compatibility implements ICompatibility {
  private id?: string;
  private type: CompatibilityType;
  private mbti: string;
  private targetMbti: string;
  private description: string;

  private constructor(properties: ICompatibilityProperties) {
    Object.assign(this, properties);
  }

  static new(properties: ICompatibilityProperties) {
    return new Compatibility(properties);
  }

  get getId(): string {
    return this.id;
  }

  get properties(): ICompatibilityProperties {
    return {
      id: this.id,
      type: this.type,
      mbti: this.mbti,
      targetMbti: this.targetMbti,
      description: this.description
    };
  }

  set setType(type: CompatibilityType) {
    this.type = type;
  }

  set setMbti(mbti: string) {
    this.mbti = mbti;
  }

  set setTargetMbti(targetMbti: string) {
    this.targetMbti = targetMbti;
  }

  set setDescription(description: string) {
    this.description = description;
  }
}
