const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define Category model
const Category = sequelize.define(
  'Category',
  {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'Categories', // Table name in the database
    timestamps: false, // Disable timestamps
  }
);

module.exports = Category;
