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
    pokemonName: DataTypes.STRING,
    healthpoints: DataTypes.STRING,
    pokemonType: DataTypes.STRING,
    pokemonImage: DataTypes.STRING,
    firstMoveImage: DataTypes.STRING,
    firstMoveName: DataTypes.STRING,
    firstMoveAmount: DataTypes.INTEGER,
    firstMoveDamage: DataTypes.INTEGER,
    secondMoveImage: DataTypes.STRING,
    secondMoveName: DataTypes.STRING,
    secondMoveAmount: DataTypes.INTEGER,
    secondMoveDamage: DataTypes.INTEGER,
    weaknessTypeImage: DataTypes.STRING,
    resistanceTypeImage: DataTypes.STRING,
    retreatCostAmount: DataTypes.STRING,
    retreatCostImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemon_cards',
    timestamps:false
  });
  return Pokemon;
};