import { Inject, Injectable } from '@nestjs/common';
import { ICompatibilityService } from './compatibility.interface';
import { MONGO_COMPATIBILITY_MODEL } from '../db/model/compatibility.model';
import { ICompatibilityModel } from '../db/model/compatibility.interface';
import { CreateCompatibilityCommand } from '../controller/command/create-compatibility.command';
import { DeleteCompatibilityCommand } from '../controller/command/delete-compatibility.command';
import { UpdateCompatibilityCommand } from '../controller/command/update-compatibility.command';
import { GetAllCompatibilityQuery } from '../controller/query/get-all-compatibility.query';
import { GetOneCompatibilityQuery } from '../controller/query/get-one-compatibility.query';
import { Compatibility } from '../domain/compatibility.domain';

export const COMPATIBILITY_SERVICE = 'COMPATIBILITY_SERVICE';

@Injectable()
export class CompatibilityService implements ICompatibilityService {
  constructor(
    @Inject(MONGO_COMPATIBILITY_MODEL)
    private readonly compatibilityModel: ICompatibilityModel
  ) {}

  getAll({ limit, skip, sortField, sortType }: GetAllCompatibilityQuery) {
    return this.compatibilityModel.findAll({
      limit,
      skip,
      sortField,
      sortType
    });
  }

  getOne({ compatibilityId }: GetOneCompatibilityQuery) {
    return this.compatibilityModel.findOneById(compatibilityId);
  }

  createOne({
    type,
    mbti,
    targetMbti,
    description
  }: CreateCompatibilityCommand) {
    const compatibility = Compatibility.new({
      type,
      mbti,
      targetMbti,
      description
    });
    return this.compatibilityModel.createOne(compatibility);
  }

  async updateOne({
    compatibilityId,
    type,
    mbti,
    targetMbti,
    description
  }: UpdateCompatibilityCommand) {
    const compabitility = await this.compatibilityModel.findOneById(
      compatibilityId
    );
    if (!compabitility.getId) {
      throw new Error('Compatibility not found');
    }

    type && (compabitility.setType = type);
    mbti && (compabitility.setMbti = mbti);
    targetMbti && (compabitility.setTargetMbti = targetMbti);
    description && (compabitility.setDescription = description);

    return this.compatibilityModel.updateOne(compabitility);
  }

  async deleteOne({ compatibilityId }: DeleteCompatibilityCommand) {
    const compabitility = await this.compatibilityModel.findOneById(
      compatibilityId
    );
    if (!compabitility.getId) {
      throw new Error('Compatibility not found');
    }

    return this.compatibilityModel.deleteOne(compabitility);
  }
}
