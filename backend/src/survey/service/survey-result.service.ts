import { Inject, Injectable } from '@nestjs/common';
import { ISurveyResultService } from './survey-result.interface';
import { MONGO_SURVEY_RESULT_MODEL } from '../db/model/survey-result.model';
import { ISurveyResultModel } from '../db/model/survey-result.interface';
import { GetAllSurveyResultsQuery } from '../controller/query/get-all-survey-result.query';
import { ISurveyResult, SurveyResult } from '../domain/survey-result.domain';
import { GetOneSurveyResultQuery } from '../controller/query/get-one-survey-result.query';
import { CreateSurveyResultCommand } from '../controller/command/create-survey-result.command';
import { DeleteSurveyResultCommand } from '../controller/command/delete-survey-result.command';

export const SURVEY_RESULT_SERVICE = 'SURVEY_RESULT_SERVICE';

@Injectable()
export class SurveyResultService implements ISurveyResultService {
  constructor(
    @Inject(MONGO_SURVEY_RESULT_MODEL)
    private readonly surveyResultModel: ISurveyResultModel
  ) {}

  getAll({
    limit,
    skip,
    sortField,
    sortType,
    userId
  }: GetAllSurveyResultsQuery): Promise<ISurveyResult[]> {
    return this.surveyResultModel.findAll({
      limit,
      skip,
      sortField,
      sortType,
      userId
    });
  }

  getOne({ surveyResultId }: GetOneSurveyResultQuery): Promise<ISurveyResult> {
    return this.surveyResultModel.findOneById(surveyResultId);
  }

  async createOne({
    userId,
    mbti,
    tags,
    description,
    goodCompatibilityId,
    badCompatibilityId,
    energy,
    awareness,
    judgement,
    life
  }: CreateSurveyResultCommand): Promise<void> {
    const surveyResult = SurveyResult.new({
      userId,
      mbti,
      tags,
      description,
      goodCompatibilityId,
      badCompatibilityId,
      energy,
      awareness,
      judgement,
      life
    });

    await this.surveyResultModel.createOne(surveyResult);
  }

  async deleteOne({
    surveyResultId
  }: DeleteSurveyResultCommand): Promise<void> {
    const surveyResult = await this.surveyResultModel.findOneById(
      surveyResultId
    );

    if (!surveyResult.getId) {
      throw new Error('Survey result not found');
    }

    await this.surveyResultModel.deleteOne(surveyResult);
  }
}
