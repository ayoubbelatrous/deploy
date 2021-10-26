'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user,product}) {
        this.belongsTo(user ,{foreignKey: 'userId',as: 'user'})
        this.belongsTo(product ,{foreignKey: 'productId',as: 'product'})
        
    }
  };
  order.init({
    firstname: {type:DataTypes.STRING,allowNull:false},
    lastname: {type:DataTypes.STRING,allowNull:false},
    phone: {type:DataTypes.STRING,allowNull:false},
    state: {type:DataTypes.STRING,allowNull:false},
    commune: {type:DataTypes.STRING,allowNull:false},
    address: {type:DataTypes.STRING,allowNull:false},
    zipcode: {type:DataTypes.STRING,allowNull:false},
    date: {type:DataTypes.DATE,allowNull:false},
  }, {
    sequelize,
    tableName:'orders',
    modelName: 'order',
  });
  return order;
};