import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'root',
  database: 'bookstore'
});

export default db;