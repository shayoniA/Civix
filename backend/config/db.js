<<<<<<< HEAD

=======
const {Pool} =require('pg');
>>>>>>> 7c5900ba5b06a57c3e847c9543aeeb81e0ed4159
const pg = require('pg');
require('dotenv').config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
});

module.exports = pool;
<<<<<<< HEAD
=======



>>>>>>> 7c5900ba5b06a57c3e847c9543aeeb81e0ed4159
