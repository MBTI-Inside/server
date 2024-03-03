import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Board } from '../schema/board.schema';
import { Model, Types } from 'mongoose';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { BoardDomain } from 'src/board/domain/board.domain';
import { IBoardModel } from './board.model.interface';
import { IBoard } from 'src/board/dto/board.dto';
import { createReadStream } from 'fs';

export const MONGO_BOARD_MODEL = 'MONGO_BOARD_MODEL';

@Injectable()
export class BoardModel implements IBoardModel {
  constructor(
    @InjectModel(Board.name, MONGO_ARE_YOU_T_DATABASE)
    private readonly boardModel: Model<Board>
  ) {}

  async findById(id: string): Promise<BoardDomain> {
    const board = await this.boardModel.findById(id).lean().exec();
    return BoardDomain.new(this._changeIdType(board));
  }

  async findAll(): Promise<BoardDomain[]> {
    const boards: BoardDomain[] = [];
    const boardsCursor = this.boardModel.find().lean().cursor();

    for await (const board of boardsCursor) {
      boards.push(BoardDomain.new(this._changeIdType(board)));
    }

    return boards;
  }

  async create(board: any): Promise<BoardDomain> {
    const createdBoard = await this.boardModel.create(board);
    return BoardDomain.new(this._changeIdType(createdBoard));
  }

  async update(id: string, board: Board): Promise<BoardDomain> {
    const updatedBoard = await this.boardModel
      .findByIdAndUpdate(id, board, { new: true })
      .lean()
      .exec();

    return BoardDomain.new(this._changeIdType(updatedBoard));
  }

  async delete(id: string): Promise<BoardDomain> {
    const deletedBoard = await this.boardModel
      .findByIdAndDelete(id)
      .lean()
      .exec();

    return BoardDomain.new(this._changeIdType(deletedBoard));
  }

  _changeIdType(board: Omit<IBoard, 'id'> & { _id: Types.ObjectId }): IBoard {
    const { _id, ...boardData } = board;
    return { id: String(_id), ...boardData };
  }
}
