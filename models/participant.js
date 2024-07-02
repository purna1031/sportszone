'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    static associate(models) {
      Participant.belongsTo(models.Session, { foreignKey: 'session_id' });
      Participant.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Participant.init({
    session_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Participant',
  });
  return Participant;
};
