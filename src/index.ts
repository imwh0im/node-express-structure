import express from 'express';

import userRouter from './routers/user';

const app: express.Express = express();

app.use('/users', userRouter);
