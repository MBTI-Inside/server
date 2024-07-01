import { IMemo } from 'src/memo/domain/memo.domain';

export interface IMemoModel {
  findAll(FindMemoFieldsType, FindFilter): Promise<IMemo[]>;
  createOne(memo: IMemo): Promise<IMemo>;
  updateOne(memo: IMemo): Promise<IMemo>;
  increaseLikeCount(memoId: string): Promise<IMemo>;
  deleteOne(memoId: string): Promise<void>;
}
