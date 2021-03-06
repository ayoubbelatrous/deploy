'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({product,order}) {
      this.hasMany(product, { foreignKey: 'userId',as: 'products'})
      this.hasMany(order ,{foreignKey: 'userId',as: 'orders'})

    }
  };
  user.init({
    
    email: {type:DataTypes.STRING,allowNull:false},
    password: {type:DataTypes.STRING,allowNull:false},
    role: {type:DataTypes.STRING,allowNull:false}
  }, {
    sequelize,
    tableName:'users',
    modelName: 'user',
  });
  return user;
};