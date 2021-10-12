import UserService from "../../src/services/user-service";
import { mockUserService } from "../../mock/models/user-model.mock";

describe('user service test', () => {
  describe('get users', () => {
    beforeEach(() => {
      mockUserService();
    });

    it('get users', () => {
      const res = new UserService().getUsers();
      expect(res[0].id).toEqual(1);
    })

    afterEach(() => {
      jest.resetAllMocks();
    });
  });

  describe('getUser', () => {
    beforeEach(() => {
      mockUserService();
    });
    
    it('get user', () => {
      const res = new UserService().getUser(1);
      expect(res.id).toEqual(1);
    });

    it('failed get user', () => {
      expect(() => new UserService().getUser(2)).toThrow(Error);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });
  });

  describe('createUser', () => {
    beforeEach(() => {
      mockUserService();
    });

    it('create user', () => {
      const userId = new UserService().createUser({ 
        name: "henry",
        password: "123123",
        isActive: "enabled",
      });
      expect(userId).toEqual(2);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });
  });

  describe('updateUser', () => {
    beforeEach(() => {
      mockUserService();
    });

    it('update user', () => {
      const res = new UserService().updateUser(1, { isActive: 'disabled' });
      expect(res).toBe(true);
    });

    it('failed update user', () => {
      expect(() => new UserService().updateUser(2, { isActive: 'disabled' })).toThrow(Error);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });
  })
})
