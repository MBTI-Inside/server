import { IBoard } from '../dto/board.dto';

export interface IBoardDomain {
  get getId(): string;
  get getTitle(): string;
  get getContent(): string;
  get properties(): IBoard;
  set update(board: IBoard);
}

export class BoardDomain implements IBoardDomain {
  private id?: string;
  private title: string;
  private content: string;

  private constructor(properties: IBoard) {
    Object.assign(this, properties);
  }

  static new(properties: IBoard) {
    return new BoardDomain(properties);
  }

  get getId(): string {
    return this.id;
  }

  get getTitle(): string {
    return this.title;
  }

  get getContent(): string {
    return this.content;
  }

  set update(board: IBoard) {
    const { title, content } = board;
    this.title = title;
    this.content = content;
  }

  get properties(): IBoard {
    return {
      id: this.id,
      title: this.title,
      content: this.content
    };
  }
}
