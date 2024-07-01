import { FindFilter } from 'src/common/types';
import { FindUserFieldsType } from '../type/type';

export class GetQuery {
  constructor(
    readonly fields: FindUserFieldsType,
    readonly filter: FindFilter
  ) {}
}
