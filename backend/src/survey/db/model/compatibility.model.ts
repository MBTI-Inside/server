import { Injectable } from '@nestjs/common';
import { ICompatibilityModel } from './compatibility.interface';
import {
  Compatibility,
  ICompatibility,
  ICompatibilityProperties
} from 'src/survey/domain/compatibility.domain';
import { InjectModel } from '@nestjs/mongoose';
import { CompatibilityEntity } from '../schema/compatibility.schema';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { Model, Types } from 'mongoose';
import { SortType } from 'src/common/types';

export const MONGO_COMPATIBILITY_MODEL = 'MONGO_COMPATIBILITY_MODEL';

@Injectable()
export class CompatibilityModel implements ICompatibilityModel {
  constructor(
    @InjectModel(CompatibilityEntity.name, MONGO_ARE_YOU_T_DATABASE)
    private readonly compatiblityModel: Model<CompatibilityEntity>
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
  }): Promise<ICompatibility[]> {
    let sortKey: string;
    switch (sortField) {
      case 'id':
        sortKey = '_id';
        break;
    }

    const compatibilities: ICompatibility[] = [];
    const compatibilitiesCursor = this.compatiblityModel
      .find()
      .limit(limit)
      .skip(skip)
      .sort({ [sortKey]: sortType })
      .lean()
      .cursor();

    for await (const compatibility of compatibilitiesCursor) {
      compatibilities.push(
        Compatibility.new(this._changeObjectIdToStringId(compatibility))
      );
    }

    return compatibilities;
  }
  async findOneById(compatibilityId: string): Promise<ICompatibility> {
    const compatibility = await this.compatiblityModel
      .findOne({
        _id: this._changeStringIdToObjectId(compatibilityId)
      })
      .lean()
      .exec();

    return Compatibility.new(this._changeObjectIdToStringId(compatibility));
  }
  async createOne(compatibility: ICompatibility): Promise<void> {
    await this.compatiblityModel.create(compatibility);
  }
  async updateOne(compatibility: ICompatibility): Promise<void> {
    await this.compatiblityModel
      .findByIdAndUpdate(
        this._changeStringIdToObjectId(compatibility.getId),
        compatibility.properties
      )
      .lean()
      .exec();
  }
  async deleteOne(compatibility: ICompatibility): Promise<void> {
    await this.compatiblityModel
      .findByIdAndDelete(this._changeStringIdToObjectId(compatibility.getId))
      .lean()
      .exec();
  }

  _changeObjectIdToStringId(
    compatiblity: Omit<ICompatibilityProperties, 'id'> & { _id: Types.ObjectId }
  ): ICompatibilityProperties {
    if (!compatiblity) return null;

    const { _id, ...compatiblityData } = compatiblity;
    return { id: String(_id), ...compatiblityData };
  }

  _changeStringIdToObjectId(id: string): Types.ObjectId {
    return new Types.ObjectId(id);
  }
}
