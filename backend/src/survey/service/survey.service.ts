import { Inject, Injectable } from '@nestjs/common';
import { ISurveyService } from './survey.service.interface';
import {
  CreateSurveyCommand,
  DeleteSurveyCommand,
  GetAllSurveyQuery,
  GetOneSurveyQuery,
  UpdateSurveyCommand
} from '../dto/survey.dto';
import { ISurveyModel } from '../db/model/survey.model.interface';
import { MONGO_SURVEY_MODEL } from '../db/model/survey.model';
import { Survey } from '../domain/survey.domain';

export const SURVEY_SERVICE = 'SURVEY_SERVICE';

@Injectable()
export class SurveyService implements ISurveyService {
  constructor(
    @Inject(MONGO_SURVEY_MODEL) private readonly surveyModel: ISurveyModel
  ) {}

  getAll({ limit, skip, sortField, sortType }: GetAllSurveyQuery) {
    return this.surveyModel.findAll({ limit, skip, sortField, sortType });
  }

  getOne({ surveyId }: GetOneSurveyQuery) {
    return this.surveyModel.findOneById(surveyId);
  }

  createOne({ subject, answer }: CreateSurveyCommand) {
    const survey = Survey.new({ subject, answer });
    return this.surveyModel.createOne(survey);
  }

  async updateOne({ surveyId, subject, answer }: UpdateSurveyCommand) {
    const survey = await this.surveyModel.findOneById(surveyId);
    if (!survey) {
      throw new Error('Survey not found');
    }

    subject && (survey.setSubject = subject);
    answer?.length && (survey.setAnswer = answer);

    return this.surveyModel.updateOne(survey);
  }

  async deleteOne({ surveyId }: DeleteSurveyCommand) {
    const survey = await this.surveyModel.findOneById(surveyId);
    if (!survey) {
      throw new Error('Survey not found');
    }

    return this.surveyModel.deleteOne(survey);
  }
}
