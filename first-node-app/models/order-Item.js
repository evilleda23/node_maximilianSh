const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const OrderItem = sequelize.define('orderItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = OrderItem;
