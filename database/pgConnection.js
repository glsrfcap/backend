const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_postgres_user',
  host: 'localhost',
  database: 'your_postgres_database',
  password: 'your_postgres_password',
  port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;