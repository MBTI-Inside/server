import { SortType } from 'src/common/types';

export class GetAllSurveyQuery {
  constructor(
    readonly limit: number,
    readonly skip: number,
    readonly sortField: string,
    readonly sortType: SortType
  ) {}
}
