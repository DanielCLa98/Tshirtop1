const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Category model with necessary fields
const Category = sequelize.define('Category', {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically increment the ID
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Name is required
  },
}, {
  timestamps: false, // Disable timestamps if not needed
});

module.exports = Category;
