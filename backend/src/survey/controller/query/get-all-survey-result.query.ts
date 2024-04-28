import { SortType } from 'src/common/types';

export class GetAllSurveyResultsQuery {
  constructor(
    readonly limit: number,
    readonly skip: number,
    readonly sortField: string,
    readonly sortType: SortType,
    readonly userId?: string
  ) {}
}
