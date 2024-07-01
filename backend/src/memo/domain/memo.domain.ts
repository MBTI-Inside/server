export interface IMemoProperties {
  id?: string;
  parentMemoId?: string;
  content: string;
  password?: string;
  color: string;
  likeCount: number;
}

export interface IMemo {
  get getId(): string;
  get properties(): IMemoProperties;
}

export class Memo implements IMemo {
  private readonly id?: string;
  private parentMemoId?: string;
  private content: string;
  private password?: string;
  private color: string;
  private likeCount: number;

  private constructor(properties: IMemoProperties) {
    Object.assign(this, properties);
  }

  static new(properties: IMemoProperties) {
    return new Memo(properties);
  }

  get properties(): IMemoProperties {
    return {
      id: this.id,
      parentMemoId: this.parentMemoId,
      content: this.content,
      password: this.password,
      color: this.color,
      likeCount: this.likeCount
    };
  }

  get getId(): string {
    return this.id;
  }
}
