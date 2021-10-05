export default class UserModel {
  private Users: Record<string, unknown>[] = [];

  public getUsers(): Record<string, unknown>[] {
    return this.Users;
  }

  public getUser(userId: number): Record<string, unknown> {
    const user = this.Users.find(user => user.id === userId);
    if (!user) {
      throw new Error(`Cannot find #${userId}`);
    }
    return user;
  }

  public insertUser(userData: Record<string, unknown>): Record<string, unknown> {
    this.Users.push({ id: this.Users.length + 1, ...userData });
    return this.Users[this.Users.length];
  }
}
