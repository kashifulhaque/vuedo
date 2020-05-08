// Imports
const Pool = require("pg").Pool;

// Inits
const pool = new Pool({
  user: YOUR_POSTGRESQL_DATABASE_USERNAME,
  password: YOUR_POSTGRESQL_DATABASE_PASSWORD,
  host: "localhost",
  port: 5432,
  database: YOUR_POSTGRESQL_DATABASE_NAME,
});

module.exports = pool;
