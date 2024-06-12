import express from 'express';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// SSL Certificate
const privateKey = fs.readFileSync(path.resolve(__dirname, 'certs/private.key'), 'utf8');
const certificate = fs.readFileSync(path.resolve(__dirname, 'certs/certificate.crt'), 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Routes
app.use('/api', router);

// Create HTTPS server
https.createServer(credentials, app).listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
