import express from 'express';
import db from '../db/db';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM orders');
    res.json(rows);
  } catch (error) {
    res.status(500).send('Error fetching orders');
  }
});

export default router;