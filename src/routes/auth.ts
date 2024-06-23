import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import hashPassword from '../bcryptUtils';
import db from '../db/db';

class User {
    static async findOneByUsername(username: string): Promise<any> {
      try {
        const [rows]:any = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        return rows[0];
      } catch (error) {
        console.error('Error finding user:', error);
        throw error;
      }
    }
  }

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username in the database
    const user = await User.findOneByUsername(username);

    // If user is not found, return 401 Unauthorized
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare hashed password with the provided password
    const validPassword = await bcrypt.compare(password, user.password);

    // If password is invalid, return 401 Unauthorized
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token with user ID as payload
    const accessToken = jwt.sign({ userId: user.id }, env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

    // Send the access token in the response
    res.json({ accessToken });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

export default router;