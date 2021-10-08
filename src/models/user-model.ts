import { IUserModel, IInsertUserModel, IUpdateUser } from "../types/models";

export default class UserModel {
  private Users: IUserModel[] = [];

  public getUsers(): IUserModel[] {
    return this.Users;
  }

  public getUser(userId: number): IUserModel {
    const user = this.Users.find(user => user.id === userId);
    if (!user) {
      throw new Error(`Cannot find #${userId}`);
    }
    return user;
  }

  public insertUser(userData: IInsertUserModel): IUserModel {
    this.Users.push({ id: this.Users.length + 1, ...userData });
    return this.Users[this.Users.length];
  }

  public updateUser(userId: number, userData: IUpdateUser): void {
    const user = this.getUser(userId);
    this.deleteUser(userId);
    const updateUserData = Object.assign(user, userData);
    this.insertUser(updateUserData);
  }

  private deleteUser(userId: number) {
    const userIndex = this.getUserIndex(userId);
    this.Users.splice(userIndex, 1);
  }

  private getUserIndex(userId: number) {
    const userIndex = this.Users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      throw new Error(`Cannot find userId#${userId}`);
    }
    return userIndex
  }

}