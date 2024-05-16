import { Types } from 'mongoose';

export function changeObjectIdToStringId<T>(
  properties: Omit<T, 'id'> & { _id: Types.ObjectId }
): T | null {
  if (!properties) return null;

  const { _id, ...data } = properties;
  return { id: String(_id), ...data } as T;
}

export function changeStringIdToObjectId(id: string): Types.ObjectId {
  return new Types.ObjectId(id);
}
