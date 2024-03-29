const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Order;
