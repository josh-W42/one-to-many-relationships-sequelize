'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class toy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.toy.belongsToMany(models.pet, {through: "petsToys"});
    }
  };
  toy.init({
    type: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'toy',
  });
  return toy;
};