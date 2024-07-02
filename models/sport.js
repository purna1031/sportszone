'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    static associate(models) {
      Sport.hasMany(models.Session, { foreignKey: 'sport_id' });
    }
  }
  Sport.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sport',
  });
  return Sport;
};
