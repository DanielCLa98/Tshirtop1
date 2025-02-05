const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Product = sequelize.define('Product', {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  size: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  color: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  accessories: {
    type: DataTypes.STRING,
  },
  productCode: {
    type: DataTypes.STRING,
  },
  launchDate: {
    type: DataTypes.DATE,
  },
  brand: {
    type: DataTypes.STRING,
  },
  productStatus: {
    type: DataTypes.INTEGER,
  },
  categoryId: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'Products',
  timestamps: false,
});

module.exports = Product ;

