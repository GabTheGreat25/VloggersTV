import { IDateStamps, IEntity } from './base.interface';

export interface IUser extends IDateStamps, IEntity {
  firstName: string;
  lastName: string;
  email: string;
}
