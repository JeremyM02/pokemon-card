'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init({
    pokemonName: DataTypes.STRING, //text
    healthpoints: DataTypes.STRING, //text
    pokemonType: DataTypes.STRING, //image
    pokemonImage: DataTypes.STRING, //image
    firstMoveImage: DataTypes.STRING, //image
    firstMoveName: DataTypes.STRING, //text
    firstMoveAmount: DataTypes.INTEGER, //number
    firstMoveDamage: DataTypes.INTEGER, //number
    secondMoveImage: DataTypes.STRING, //image
    secondMoveName: DataTypes.STRING, //text
    secondMoveAmount: DataTypes.INTEGER, //number
    secondMoveDamage: DataTypes.INTEGER, //number
    weaknessTypeImage: DataTypes.STRING, //image
    resistanceTypeImage: DataTypes.STRING, //image
    retreatCostAmount: DataTypes.INTEGER, //number
    retreatCostImage: DataTypes.STRING, //image
    elementType: DataTypes.STRING//text
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemon_cards',
    timestamps:false
  });
  return Pokemon;
};