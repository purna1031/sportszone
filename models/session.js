'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    static associate(models) {
      Session.belongsTo(models.Sport, { foreignKey: 'sport_id' });
      Session.belongsTo(models.User, { foreignKey: 'creator_id' });
      Session.belongsToMany(models.User, { through: 'Participant', foreignKey: 'session_id' });
    }
  }
  Session.init({
    sport_id: DataTypes.INTEGER,
    creator_id: DataTypes.INTEGER,
    team1: DataTypes.STRING,
    team2: DataTypes.STRING,
    additional_players: DataTypes.INTEGER,
    date: DataTypes.DATE,
    venue: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};
