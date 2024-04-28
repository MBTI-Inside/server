import { SortType } from 'src/common/types';
import { Survey } from '../../domain/survey.domain';

export interface ISurveyModel {
  findAll({
    limit,
    skip,
    sortField,
    sortType
  }: {
    limit: number;
    skip: number;
    sortField: string;
    sortType: SortType;
  }): Promise<Survey[]>;
  findOneById(surveyId: string): Promise<Survey>;
  createOne(survey: Survey): Promise<void>;
  updateOne(survey: Survey): Promise<void>;
  deleteOne(survey: Survey): Promise<void>;
}
