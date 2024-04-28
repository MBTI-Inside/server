import { CreateSurveyResultCommand } from '../controller/command/create-survey-result.command';
import { DeleteSurveyResultCommand } from '../controller/command/delete-survey-result.command';
import { GetAllSurveyResultsQuery } from '../controller/query/get-all-survey-result.query';
import { GetOneSurveyResultQuery } from '../controller/query/get-one-survey-result.query';
import { ISurveyResult } from '../domain/survey-result.domain';

export interface ISurveyResultService {
  getAll(query: GetAllSurveyResultsQuery): Promise<ISurveyResult[]>;
  getOne(query: GetOneSurveyResultQuery): Promise<ISurveyResult>;
  createOne(command: CreateSurveyResultCommand): Promise<void>;
  deleteOne(command: DeleteSurveyResultCommand): Promise<void>;
}
