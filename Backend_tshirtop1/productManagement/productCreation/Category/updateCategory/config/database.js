require('dotenv').config();

const { Sequelize } = require('sequelize');

// Set up database connection using environment variables
const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    dialect: 'postgres',
    logging: false, // Disable SQL query logging
  }
);

module.exports = sequelize;
