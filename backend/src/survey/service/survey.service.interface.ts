import {
  CreateSurveyCommand,
  DeleteSurveyCommand,
  GetAllSurveyQuery,
  GetOneSurveyQuery,
  UpdateSurveyCommand
} from '../dto/survey.dto';

export interface ISurveyService {
  getAll(query: GetAllSurveyQuery);
  getOne(query: GetOneSurveyQuery);
  createOne(command: CreateSurveyCommand);
  updateOne(command: UpdateSurveyCommand);
  deleteOne(command: DeleteSurveyCommand);
}
