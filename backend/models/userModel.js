const pool = require('../config/db');

pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    email VARCHAR(100),
    password TEXT,
    role VARCHAR(10) DEFAULT 'user'
  );
`).catch(err => console.error('Error creating user table:', err));


module.exports = {
    async createUser(username, email, hashedPassword, role) {
        return pool.query(
            'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4)',
            [username, email, hashedPassword, role]

        );
    },

    async findByEmail(email) {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0];
    },
};