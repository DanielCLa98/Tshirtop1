require('dotenv').config(); // Load environment variables from .env file
const { Sequelize } = require('sequelize');

// Configure Sequelize instance with environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database host
    dialect: process.env.DB_DIALECT, // Database dialect
    port: process.env.DB_PORT || 5432, // Default port is 5432 for PostgreSQL
    logging: false, // Disable Sequelize query logging
  }
);

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('Database connection successful'))
  .catch((error) => console.error('Database connection failed:', error));

module.exports = sequelize;
