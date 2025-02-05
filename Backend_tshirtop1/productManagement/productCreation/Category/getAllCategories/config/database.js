require('dotenv').config(); // Load environment variables from the .env file
const { Sequelize } = require('sequelize');

// Set up Sequelize using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database server host
    dialect: process.env.DB_DIALECT || 'postgres', // Default to PostgreSQL
    port: process.env.DB_PORT || 5432, // Default port for PostgreSQL
    logging: false, // Disable unnecessary logging
  }
);

// Test database connection
sequelize.authenticate()
  .then(() => console.log('✅ Successfully connected to the database'))
  .catch(err => console.error('❌ Database connection error:', err));

module.exports = sequelize;
