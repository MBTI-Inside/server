import { SortType } from 'src/common/types';
import { SurveyResult } from 'src/survey/domain/survey-result.domain';

export interface ISurveyResultModel {
  findAll({
    userId,
    limit,
    skip,
    sortField,
    sortType
  }: {
    userId: string;
    limit: number;
    skip: number;
    sortField: string;
    sortType: SortType;
  }): Promise<SurveyResult[]>;
  findOneById(surveyResultId: string): Promise<SurveyResult>;
  createOne(surveyResult: SurveyResult): Promise<void>;
  deleteOne(surveyResult: SurveyResult): Promise<void>;
}
