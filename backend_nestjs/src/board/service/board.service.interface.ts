import { IBoard, ISetBoard } from '../dto/board.dto';

export interface IBoardService {
  getBoard(id: string): Promise<IBoard>;
  getBoards(): Promise<IBoard[]>;
  addBoard(board: ISetBoard): Promise<IBoard>;
  updateBoard(id: string, board: ISetBoard): Promise<IBoard>;
  deleteBoard(id: string): Promise<IBoard>;
}
