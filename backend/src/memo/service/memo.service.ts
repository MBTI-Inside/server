import { Inject, Injectable } from '@nestjs/common';
import { IMemoModel } from '../db/model/memo.model.interface';
import { IMemoService } from './memo.service.interface';
import { IMemo } from '../domain/memo.domain';

@Injectable()
export class MemoService implements IMemoService {
  constructor(@Inject() private readonly memoModel: IMemoModel) {}
  getMemoAll(): Promise<IMemo[]> {
    throw new Error('Method not implemented.');
  }
  updateMemo(memo: any): Promise<IMemo> {
    throw new Error('Method not implemented.');
  }
  increateLikeCount(memoId: string): Promise<IMemo> {
    throw new Error('Method not implemented.');
  }
  deleteMemo(memoId: string): Promise<IMemo> {
    throw new Error('Method not implemented.');
  }
}
