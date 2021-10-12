import { IUserModel, IInsertUserModel, IUpdateUser } from "../types/models";
import dayjs from "dayjs";

export default class UserModel {
  private Users: IUserModel[] = [];

  public getUsers(): IUserModel[] {
    return this.Users;
  }

  public getUser(userId: number): IUserModel | undefined {
    const user = this.Users.find(user => user.id === userId);
    return user;
  }

  public insertUser(userData: IInsertUserModel): IUserModel {
    this.Users.push({
      id: this.Users.length + 1,
      createdAt: dayjs().toDate(),
      updatedAt: dayjs().toDate(),
      ...userData,
    });
    return this.Users[this.Users.length];
  }

  public updateUser(userId: number, userData: IUpdateUser): IUserModel {
    const user = this.getUser(userId);
    if (!user) {
      throw new Error(`Cannot update userId#${userId}`);
    }

    this.deleteUser(userId);
    const updateUserData = Object.assign(user, userData);

    const updatedUserData = this.insertUser({
      id: updateUserData.id,
      name: updateUserData.name,
      password: updateUserData.password,
      isActive: updateUserData.isActive,
      createdAt: updateUserData.createdAt,
    });
    return updatedUserData;
  }

  public deleteUser(userId: number): void {
    const userIndex = this.getUserIndex(userId);
    this.Users.splice(userIndex, 1);
  }

  private getUserIndex(userId: number): number {
    const userIndex = this.Users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      throw new Error(`Cannot find userId#${userId}`);
    }
    return userIndex
  }
}
