import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { SurveyResultEntity } from '../schema/survey-result.schema';
import { Model, Types } from 'mongoose';
import { ISurveyResultModel } from './survey-result.interface';
import { SortType } from 'src/common/types';
import {
  ISurveyResultProperties,
  SurveyResult
} from 'src/survey/domain/survey-result.domain';

export const MONGO_SURVEY_RESULT_MODEL = 'MONGO_SURVEY_RESULT_MODEL';

@Injectable()
export class SurveyResultModel implements ISurveyResultModel {
  constructor(
    @InjectModel(SurveyResultEntity.name, MONGO_ARE_YOU_T_DATABASE)
    private readonly surveyResultModel: Model<SurveyResultEntity>
  ) {}

  async findAll({
    userId,
    limit = 100,
    skip = 0,
    sortField = '_id',
    sortType = 'desc'
  }: {
    userId: string;
    limit: number;
    skip: number;
    sortField: string;
    sortType: SortType;
  }): Promise<SurveyResult[]> {
    switch (sortField) {
      case 'id':
        sortField = '_id';
        break;
    }

    const surveyResults: SurveyResult[] = [];
    const surveyResultsCursor = this.surveyResultModel
      .find()
      .where(userId ? { userId } : {})
      .limit(limit)
      .skip(skip)
      .sort({ [sortField]: sortType })
      .lean()
      .cursor();

    for await (const surveyResult of surveyResultsCursor) {
      surveyResults.push(
        SurveyResult.new(this._changeObjectIdToStringId(surveyResult))
      );
    }

    return surveyResults;
  }

  async findOneById(surveyResultId: string): Promise<SurveyResult> {
    const surveyResult = await this.surveyResultModel
      .findOne({ _id: this._changeStringIdToObjectId(surveyResultId) })
      .lean()
      .exec();
    return SurveyResult.new(this._changeObjectIdToStringId(surveyResult));
  }

  async createOne(surveyResult: SurveyResult): Promise<void> {
    await this.surveyResultModel.create(surveyResult.properties);
  }

  async updateOne(surveyResult: SurveyResult) {
    await this.surveyResultModel
      .findByIdAndUpdate(
        this._changeStringIdToObjectId(surveyResult.getId),
        surveyResult.properties
      )
      .lean()
      .exec();
  }

  async deleteOne(surveyResult: SurveyResult) {
    await this.surveyResultModel
      .findByIdAndDelete(this._changeStringIdToObjectId(surveyResult.getId))
      .lean()
      .exec();
  }

  _changeObjectIdToStringId(
    surveyResult: Omit<ISurveyResultProperties, 'id'> & { _id: Types.ObjectId }
  ) {
    const { _id, ...data } = surveyResult;
    return { id: String(_id), ...data };
  }

  _changeStringIdToObjectId(id: string): Types.ObjectId {
    return new Types.ObjectId(id);
  }
}
