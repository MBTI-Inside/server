import { IMemo } from '../domain/memo.domain';

export interface IMemoService {
  getMemoAll(): Promise<IMemo[]>;
  updateMemo(memo): Promise<IMemo>;
  increateLikeCount(memoId: string): Promise<IMemo>;
  deleteMemo(memoId: string): Promise<IMemo>;
}
