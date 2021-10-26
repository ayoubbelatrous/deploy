'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user,order}) {
        this.belongsTo(user ,{foreignKey: 'userId',as: 'seller'})
        this.hasMany(order ,{foreignKey: 'productId',as: 'products'})
    }
  };
  Product.init({
    name: {type:DataTypes.STRING,allowNull:false},
    description: {type:DataTypes.TEXT,allowNull:false},
    images_url: {type:DataTypes.STRING,allowNull:false},
    imagecount:{type:DataTypes.INTEGER,allowNull:false},
    price: {type:DataTypes.INTEGER,allowNull:false},
    stock: {type:DataTypes.INTEGER,allowNull:false},
    sales: {type:DataTypes.INTEGER,allowNull:false},
    approved: { type: DataTypes.BOOLEAN , allowNull: false },
    
  }, {
    sequelize,
    tableName:'products',
    modelName: 'product',
  });
  return Product;
};