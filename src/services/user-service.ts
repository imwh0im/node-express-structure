import UserModel from "../models/user-model";
import dayjs from 'dayjs';

import { IGetUser } from "../types/services/get-user";
import { IInsertUserModel } from "../types/models";

export default class UserService {
  private userModel = new UserModel();

  public getUsers(): IGetUser[] {
    const users = this.userModel.getUsers(); 
    const data: IGetUser[] = users.map(user => {
      return {
        id: user.id,
        name: user.name,
        isActive: user.isActive,
        createdAt: dayjs(user.createdAt).format('YYYY-MM-DD HH:mm:ss'),
      };
    });
    return data;
  }

  public createUser(userData: IInsertUserModel): number {
    const user = this.userModel.insertUser(userData);
    return user.id
  }

  public getUser(userId: number): IGetUser {
    const user = this.userModel.getUser(userId);
    const data: IGetUser = {
      id: user.id,
      name: user.name,
      isActive: user.isActive,
      createdAt: dayjs(user.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    }
    return data;
  }
}
