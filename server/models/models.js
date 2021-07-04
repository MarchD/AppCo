const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  first_name: {type: DataTypes.STRING},
  last_name: {type: DataTypes.STRING},
  email: {type: DataTypes.STRING, unique: true},
  gender: {type: DataTypes.STRING},
  ip_address: {type: DataTypes.STRING}
});

const UserStatistic = sequelize.define('user_statistics', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  date: {type: DataTypes.DATE},
  page_views: {type: DataTypes.INTEGER, defaultValue: 0},
  clicks: {type: DataTypes.INTEGER, defaultValue: 0},
  user_id: {type: DataTypes.INTEGER}
}, {underscored: true});


User.hasMany(UserStatistic);
UserStatistic.belongsTo(User);

module.exports = {
  User, UserStatistic
};
