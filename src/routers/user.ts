import { Router } from 'express';

import UserService from '../services/user-service';

const userRouter = Router();

const userService = new UserService();

userRouter.get('/', (req, res, next) => {
  const result = userService.getUsers();
  res.send(result);
  next();
});

userRouter.post('/', (req, res, next) => {
  const result = userService.createUser(req.body);
  res.json({
    id: result,
  });
  next();
});

userRouter.get('/:userId', (req, res, next) => {
  const result = userService.getUser(req.params.userId);
  res.json(result);
  next();
})

export default userRouter;
