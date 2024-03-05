import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { IBoardService } from '../service/board.service.interface';
import { IBoard, ISetBoard } from '../dto/board.dto';
import { BOARD_SERVICE } from '../service/board.service';

@Controller('/v1/boards')
export class BoardController {
  constructor(
    @Inject(BOARD_SERVICE) private readonly boardService: IBoardService
  ) {}

  @Get()
  async getBoards(): Promise<IBoard[]> {
    return await this.boardService.getBoards();
  }

  @Get(':id')
  async getBoard(@Param('id') id: string): Promise<IBoard> {
    return await this.boardService.getBoard(id);
  }

  @Post()
  async addBoard(@Body() board: ISetBoard): Promise<IBoard> {
    return await this.boardService.addBoard(board);
  }

  @Patch()
  async setBoard(
    @Param('id') id: string,
    @Body() board: ISetBoard
  ): Promise<IBoard> {
    return await this.boardService.updateBoard(id, board);
  }

  @Delete()
  async deleteBoard(@Param('id') id: string): Promise<IBoard> {
    return await this.boardService.deleteBoard(id);
  }
}
