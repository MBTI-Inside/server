import { CreateCompatibilityCommand } from '../controller/command/create-compatibility.command';
import { DeleteCompatibilityCommand } from '../controller/command/delete-compatibility.command';
import { UpdateCompatibilityCommand } from '../controller/command/update-compatibility.command';
import { GetAllCompatibilityQuery } from '../controller/query/get-all-compatibility.query';
import { GetOneCompatibilityQuery } from '../controller/query/get-one-compatibility.query';

export interface ICompatibilityService {
  getAll(query: GetAllCompatibilityQuery);
  getOne(query: GetOneCompatibilityQuery);
  createOne(command: CreateCompatibilityCommand);
  updateOne(command: UpdateCompatibilityCommand);
  deleteOne(command: DeleteCompatibilityCommand);
}
