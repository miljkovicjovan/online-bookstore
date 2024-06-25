import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'bookstore'
});

export default db;