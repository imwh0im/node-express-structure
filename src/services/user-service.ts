import UserModel from "../models/user-model";

export default class UserService {
  private userModel = new UserModel();

  public getUsers() {
    const users = this.userModel.getUsers(); 
    return users;
  }

  public createUser(userData: Record<string, unknown>): Record<string, unknown>{
    const user = this.userModel.insertUser(userData);
    return user
  }

  public getUser(userId: number) {
    const user = this.userModel.getUser(userId);
    return user;
  }
}
