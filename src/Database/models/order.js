'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.ProductsList)
    }
  }
  Order.init({
    userId: DataTypes.STRING,
    total: DataTypes.INTEGER,
    productList: DataTypes.INTEGER,
    status: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};