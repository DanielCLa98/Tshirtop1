const  Sequelize  = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT || 5432, // PostgreSQL port
    logging: false,
  }
);

sequelize.authenticate()
  .then(() => console.log('Successfully connected to the database.'))
  .catch(err => console.error('Database connection error:', err));

module.exports = sequelize;
