import { Inject, Injectable } from '@nestjs/common';
import { IMbtiService } from './mbti.interface';
import { MONGO_MBTI_MODEL } from '../db/model/mbti.model';
import { IMbtiModel } from '../db/model/mbti.interface';

export const MBTI_SERVICE = 'MBTI_SERVICE';

@Injectable()
export class MbtiService implements IMbtiService {
  constructor(
    @Inject(MONGO_MBTI_MODEL) private readonly mbtiModel: IMbtiModel
  ) {}

  getAll(query: any) {
    throw new Error('Method not implemented.');
  }
  getOne(query: any) {
    throw new Error('Method not implemented.');
  }
  createOne(command: any) {
    throw new Error('Method not implemented.');
  }
  updateOne(command: any) {
    throw new Error('Method not implemented.');
  }
  deleteOne(command: any) {
    throw new Error('Method not implemented.');
  }
}
