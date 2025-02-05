const {DataTypes} = require('sequelize');
const sequelize = require('../config/Database');

const Role = sequelize.define('Role',{
    id_role:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    },
    role_name:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    description:{
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
});

module.exports = Role;