import { Inject, Injectable } from '@nestjs/common';
import { IMbtiService } from './mbti.interface';
import { MONGO_MBTI_MODEL } from '../db/model/mbti.model';
import { IMbtiModel } from '../db/model/mbti.interface';
import { GetAllMbtiQuery } from '../controller/query/get-all-mbti.query';
import { GetOneMbtiQuery } from '../controller/query/get-one-mbti.query';
import { CreateMbtiCommand } from '../controller/command/create-mbti.command';
import { Mbti } from '../domain/mbti.domain';
import { UpdateMbtiCommand } from '../controller/command/update-mbti.command';
import { DeleteMbtiCommand } from '../controller/command/delete-mbti.command';

export const MBTI_SERVICE = 'MBTI_SERVICE';

@Injectable()
export class MbtiService implements IMbtiService {
  constructor(
    @Inject(MONGO_MBTI_MODEL) private readonly mbtiModel: IMbtiModel
  ) {}

  getAll({ limit, skip, sortField, sortType }: GetAllMbtiQuery) {
    return this.mbtiModel.findAll({
      limit,
      skip,
      sortField,
      sortType
    });
  }

  getOne({ id }: GetOneMbtiQuery) {
    return this.mbtiModel.findOneById(id);
  }
  createOne({
    mbti,
    summary,
    tags,
    description,
    goodCompatibilityId,
    badCompatibilityId
  }: CreateMbtiCommand) {
    const mbti_domain = Mbti.new({
      mbti,
      summary,
      tags,
      description,
      goodCompatibilityId,
      badCompatibilityId
    });

    return this.mbtiModel.createOne(mbti_domain);
  }
  async updateOne({
    mbtiId,
    mbti,
    summary,
    tags,
    description,
    goodCompatibilityId,
    badCompatibilityId
  }: UpdateMbtiCommand) {
    const mbti_domain = await this.mbtiModel.findOneById(mbtiId);
    if (!mbti_domain.getId) {
      throw new Error('Mbti not found');
    }

    mbti && (mbti_domain.setMbti = mbti);
    summary && (mbti_domain.setSummary = summary);
    tags && (mbti_domain.setTags = tags);
    description && (mbti_domain.setDescription = description);
    goodCompatibilityId &&
      (mbti_domain.setGoodCompatibilityId = goodCompatibilityId);
    badCompatibilityId &&
      (mbti_domain.setBadCompatibilityId = badCompatibilityId);

    return this.mbtiModel.updateOne(mbti_domain);
  }
  async deleteOne({ mbtiId }: DeleteMbtiCommand) {
    const mbti = await this.mbtiModel.findOneById(mbtiId);
    if (!mbti.getId) {
      throw new Error('Mbti not found');
    }

    return this.mbtiModel.deleteOne(mbti);
  }
}
