import { SortType } from 'src/common/types';

export class GetAllMbtiQuery {
  constructor(
    readonly limit: number,
    readonly skip: number,
    readonly sortField: string,
    readonly sortType: SortType
  ) {}
}
