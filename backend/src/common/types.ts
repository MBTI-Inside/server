export type SortType = -1 | 1 | 'asc' | 'ascending' | 'desc' | 'descending';
export const SortTypeArray = [-1, 1, 'asc', 'ascending', 'desc', 'descending'];

export interface FindFilter {
  limit?: number;
  skip?: number;
  sortField?: string;
  sortType?: SortType;
}
