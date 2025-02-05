const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Product model
const Product = sequelize.define(
  'Product',
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },
    productStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Products',
    timestamps: false,
  }
);

module.exports = Product;
