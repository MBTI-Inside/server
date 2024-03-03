import { BoardDomain } from 'src/board/domain/board.domain';

export interface IBoardModel {
  findById(id: string): Promise<BoardDomain>;
  findAll(): Promise<BoardDomain[]>;
  create(board: any): Promise<BoardDomain>;
  update(id: string, board: any): Promise<BoardDomain>;
  delete(id: string): Promise<BoardDomain>;
}
