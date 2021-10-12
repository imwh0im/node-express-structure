export interface IInsertUserModel {
  id?: number;
  name: string;
  password: string;
  isActive: 'enabled' | 'disabled';
  createdAt?: Date;
}
