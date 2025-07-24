
const { Pool } = require('pg');

const pg = require('pg');

require('dotenv').config();

const pool = new Pool({
  user: String(process.env.DB_USER),
  host: String(process.env.DB_HOST) || 'localhost',
  database: String(process.env.DB_NAME),
  password: String(process.env.DB_PASSWORD),
  port: Number(process.env.DB_PORT) || 5432,
});

module.exports = pool;
