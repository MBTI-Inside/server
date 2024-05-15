import { Inject, Injectable } from '@nestjs/common';
import { ISurveyService } from './survey.service.interface';
import { ISurveyModel } from '../db/model/survey.model.interface';
import { MONGO_SURVEY_MODEL } from '../db/model/survey.model';
import { Survey } from '../domain/survey.domain';
import { GetAllSurveyQuery } from '../controller/query/get-all-survey.query';
import { GetOneSurveyQuery } from '../controller/query/get-one-survey.query';
import { CreateSurveyCommand } from '../controller/command/create-survey.command';
import { UpdateSurveyCommand } from '../controller/command/update-survey.command';
import { DeleteSurveyCommand } from '../controller/command/delete-survey.command';

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

  createOne({ subject, answer, mbtiType }: CreateSurveyCommand) {
    const survey = Survey.new({ subject, answer, mbtiType });
    return this.surveyModel.createOne(survey);
  }

  async updateOne({
    surveyId,
    subject,
    answer,
    mbtiType
  }: UpdateSurveyCommand) {
    const survey = await this.surveyModel.findOneById(surveyId);
    if (!survey.getId) {
      throw new Error('Survey not found');
    }

    subject && (survey.setSubject = subject);
    answer?.length && (survey.setAnswer = answer);
    mbtiType && (survey.setMbtiType = mbtiType);

    return this.surveyModel.updateOne(survey);
  }

  async deleteOne({ surveyId }: DeleteSurveyCommand) {
    const survey = await this.surveyModel.findOneById(surveyId);
    if (!survey.getId) {
      throw new Error('Survey not found');
    }

    return this.surveyModel.deleteOne(survey);
  }
}
