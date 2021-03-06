import { IInsertUserModel } from "./insert-user-model";

export interface IUserModel extends IInsertUserModel {
  id: number;
  updatedAt: Date;
  createdAt: Date;
}