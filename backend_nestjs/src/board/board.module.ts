import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Board, BoardSchema } from './db/schema/board.schema';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { BoardModel, MONGO_BOARD_MODEL } from './db/model/board.model';
import { BoardController } from './controller/board.controller';
import { BoardService, BOARD_SERVICE } from './service/board.service';

const IMPORTS = [
  MongooseModule.forFeature(
    [
      {
        name: Board.name,
        schema: BoardSchema
      }
    ],
    MONGO_ARE_YOU_T_DATABASE
  )
];

const PROVIDERS = [
  {
    provide: MONGO_BOARD_MODEL,
    useClass: BoardModel
  },
  {
    provide: BOARD_SERVICE,
    useClass: BoardService
  }
];

const CONTROLLERS = [BoardController];

@Module({
  imports: [...IMPORTS],
  controllers: [...CONTROLLERS],
  providers: [...PROVIDERS]
})
export class BoardModule {}
