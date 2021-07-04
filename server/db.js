const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
  {
    dialect: 'sqlite',
    host: 'localhost',
    storage: 'database.sqlite'
  },
)
