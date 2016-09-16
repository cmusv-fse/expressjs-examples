var Sequelize = require('sequelize');
var config = require('./config.json');

var sequelize = new Sequelize(
    config["db_name"],
    config["db_user"],
    config["db_password"], {
  host: config["db_host"],
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;