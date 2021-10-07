import { IUserModel, IInsertUserModel } from "../types/models";

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
}
