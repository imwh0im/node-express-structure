import UserModel from "../models/user-model";

export default class UserService {
  public createUser(userData: Record<string, unknown>): Record<string, unknown>{
    const user = new UserModel().insertUser(userData);
    return user
  }
}
