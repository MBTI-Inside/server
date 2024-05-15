import { CreateSurveyCommand } from '../controller/command/create-survey.command';
import { DeleteSurveyCommand } from '../controller/command/delete-survey.command';
import { UpdateSurveyCommand } from '../controller/command/update-survey.command';
import { GetAllSurveyQuery } from '../controller/query/get-all-survey.query';
import { GetOneSurveyQuery } from '../controller/query/get-one-survey.query';

export interface ISurveyService {
  getAll(query: GetAllSurveyQuery);
  getOne(query: GetOneSurveyQuery);
  createOne(command: CreateSurveyCommand);
  updateOne(command: UpdateSurveyCommand);
  deleteOne(command: DeleteSurveyCommand);
}
