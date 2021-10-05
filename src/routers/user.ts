import { Router } from 'express';

import UserService from '../services/user-service';

const userRouter = Router();

userRouter.post('/', (req, res, next) => {
  const result = new UserService().createUser(req.body);
  res.json(result);
  next();
});

export default userRouter;
