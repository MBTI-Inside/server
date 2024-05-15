import { Injectable } from '@nestjs/common';
import { ISurveyModel } from './survey.model.interface';
import { InjectModel } from '@nestjs/mongoose';
import { SurveyEntity } from '../schema/survey.schema';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { Model, Types } from 'mongoose';
import { ISurveyProperties, Survey } from 'src/survey/domain/survey.domain';
import { SortType } from 'src/common/types';

export const MONGO_SURVEY_MODEL = 'MONGO_SURVEY_MODEL';

@Injectable()
export class SurveyModel implements ISurveyModel {
  constructor(
    @InjectModel(SurveyEntity.name, MONGO_ARE_YOU_T_DATABASE)
    private readonly surveyModel: Model<SurveyEntity>
  ) {}

  async findAll({
    limit = 100,
    skip = 0,
    sortField = '_id',
    sortType = 'desc'
  }: {
    limit: number;
    skip: number;
    sortField: string;
    sortType: SortType;
  }): Promise<Survey[]> {
    let sortKey: string;
    switch (sortField) {
      case 'id':
        sortKey = '_id';
        break;
    }

    const surveys: Survey[] = [];
    const surveysCursor = this.surveyModel
      .find()
      .limit(limit)
      .skip(skip)
      .sort({ [sortKey]: sortType })
      .lean()
      .cursor();

    for await (const survey of surveysCursor) {
      surveys.push(Survey.new(this._changeObjectIdToStringId(survey)));
    }

    return surveys;
  }

  async findOneById(surveyId: string): Promise<Survey> {
    const survey = await this.surveyModel
      .findOne({ _id: this._changeStringIdToObjectId(surveyId) })
      .lean()
      .exec();

    return Survey.new(this._changeObjectIdToStringId(survey));
  }

  async createOne(survey: Survey): Promise<void> {
    await this.surveyModel.create(survey.properties);
  }

  async updateOne(survey: Survey): Promise<void> {
    await this.surveyModel
      .findByIdAndUpdate(
        this._changeStringIdToObjectId(survey.getId),
        survey.properties
      )
      .lean()
      .exec();
  }

  async deleteOne(survey: Survey): Promise<void> {
    await this.surveyModel
      .findByIdAndDelete(this._changeStringIdToObjectId(survey.getId))
      .lean()
      .exec();
  }

  _changeObjectIdToStringId(
    survey: Omit<ISurveyProperties, 'id'> & { _id: Types.ObjectId }
  ): ISurveyProperties {
    if (!survey) return null;

    const { _id, ...surveyData } = survey;
    return { id: String(_id), ...surveyData };
  }

  _changeStringIdToObjectId(id: string): Types.ObjectId {
    return new Types.ObjectId(id);
  }
}
