const mongoose = require('mongoose');

<<<<<<< HEAD
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // could be 'admin' or 'user'
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);



=======
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
>>>>>>> 7c5900ba5b06a57c3e847c9543aeeb81e0ed4159
