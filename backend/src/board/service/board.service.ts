import { Inject, Injectable } from '@nestjs/common';
import { MONGO_BOARD_MODEL } from '../db/model/board.model';
import { IBoardModel } from '../db/model/board.model.interface';
import { IBoard, ISetBoard } from '../dto/board.dto';
import { IBoardService } from './board.service.interface';

export const BOARD_SERVICE = 'BOARD_SERVICE';

@Injectable()
export class BoardService implements IBoardService {
  constructor(
    @Inject(MONGO_BOARD_MODEL) private readonly boardModel: IBoardModel
  ) {}

  async getBoard(id: string): Promise<IBoard> {
    const board = await this.boardModel.findById(id);
    return board.properties;
  }

  async getBoards(): Promise<IBoard[]> {
    const board = await this.boardModel.findAll();
    return board.map((board) => board.properties);
  }
  async addBoard(board: ISetBoard): Promise<IBoard> {
    const createdBoard = await this.boardModel.create(board);
    return createdBoard.properties;
  }

  async updateBoard(id: string, board: ISetBoard): Promise<IBoard> {
    const udpatedBoard = await this.boardModel.update(id, board);
    return udpatedBoard.properties;
  }

  async deleteBoard(id: string): Promise<IBoard> {
    const deletedBoard = await this.boardModel.delete(id);
    return deletedBoard.properties;
  }
}
