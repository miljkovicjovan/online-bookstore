import express from 'express';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from your frontend
}));
app.use(express.json());

// SSL Certificate
const privateKey = fs.readFileSync(path.resolve(__dirname, 'certs/private.key'), 'utf8');
const certificate = fs.readFileSync(path.resolve(__dirname, 'certs/certificate.crt'), 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Online Bookstore!');
});

app.get('/api', (req, res) => {
    res.send('Hello from the backend!');
});

// Create HTTPS server
https.createServer(credentials, app).listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
