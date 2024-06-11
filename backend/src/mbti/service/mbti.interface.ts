import { CreateMbtiCommand } from '../controller/command/create-mbti.command';
import { DeleteMbtiCommand } from '../controller/command/delete-mbti.command';
import { UpdateMbtiCommand } from '../controller/command/update-mbti.command';
import { GetAllMbtiQuery } from '../controller/query/get-all-mbti.query';
import { GetOneMbtiQuery } from '../controller/query/get-one-mbti.query';

export interface IMbtiService {
  getAll(query: GetAllMbtiQuery);
  getOne(query: GetOneMbtiQuery);
  createOne(command: CreateMbtiCommand);
  updateOne(command: UpdateMbtiCommand);
  deleteOne(command: DeleteMbtiCommand);
}
