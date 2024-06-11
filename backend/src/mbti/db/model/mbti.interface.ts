import { SortType } from 'src/common/types';
import { IMbti } from 'src/mbti/domain/mbti.domain';

export interface IMbtiModel {
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
  }): Promise<IMbti[]>;
  findOneById(mbtiId: string): Promise<IMbti>;
  createOne(mbti: IMbti): Promise<void>;
  updateOne(mbti: IMbti): Promise<void>;
  deleteOne(mbti: IMbti): Promise<void>;
}
