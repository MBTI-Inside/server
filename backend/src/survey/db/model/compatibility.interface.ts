import { SortType } from 'src/common/types';
import { ICompatibility } from 'src/survey/domain/compatibility.domain';

export interface ICompatibilityModel {
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
  }): Promise<ICompatibility[]>;
  findOneById(compatibilityId: string): Promise<ICompatibility>;
  createOne(compatibility: ICompatibility): Promise<void>;
  updateOne(compatibility: ICompatibility): Promise<void>;
  deleteOne(compatibility: ICompatibility): Promise<void>;
}
