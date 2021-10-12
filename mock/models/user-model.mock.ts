import UserModel from "../../src/models/user-model";
import dayjs from "dayjs";
import { IUserModel } from "../../src/types/models";

const mockGetUsers = jest.spyOn(UserModel.prototype, 'getUsers');
const mockGetUser = jest.spyOn(UserModel.prototype, 'getUser');
const mockInsertUser = jest.spyOn(UserModel.prototype, 'insertUser')
const mockUpdateUser = jest.spyOn(UserModel.prototype, 'updateUser')

const userModelData: IUserModel = {
  id: 1,
  name: 'henry',
  password: '123123',
  isActive: 'enabled',
  updatedAt: dayjs('2021-10-13 00:00:00').toDate(),
  createdAt: dayjs('2021-10-13 00:00:00').toDate(),
};

export function mockUserService(): void {
  mockGetUsers.mockImplementation(() => [
    userModelData,
  ]);

  mockGetUser.mockImplementation((userId) => {
    switch(userId) {
      case 2:
        return undefined;
      default:
        return userModelData;
    }
  });

  mockInsertUser.mockImplementation((userData) => {
    return {
      id: 2,
      createdAt: dayjs().toDate(),
      updatedAt: dayjs().toDate(),
      ...userData,
    };
  });

  mockUpdateUser.mockImplementation((userId, userData) => {
    switch(userId) {
      case 1:
        return userModelData;
      default:
        throw new Error();
    }
  })
}
