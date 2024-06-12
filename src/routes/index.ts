import express from 'express';
import usersRouter from './users';
import booksRouter from './books';
import ordersRouter from './orders';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/books', booksRouter);
router.use('/orders', ordersRouter);

export default router;