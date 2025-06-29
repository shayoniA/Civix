const pool = require('../config/db');

pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password TEXT,
    role VARCHAR(10) DEFAULT 'user',
    location VARCHAR(255) DEFAULT 'N/A',
    complaints INTEGER DEFAULT 0,
    last_activity TIMESTAMP
  );
`).catch(err => console.error('Error creating user table:', err));


module.exports = {
  async createUser(username, email, hashedPassword, role = 'user') {
    return pool.query(
      `INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4)`,
      [username, email, hashedPassword, role]
    );
  },

  async findByEmail(email) {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0];
  },
};