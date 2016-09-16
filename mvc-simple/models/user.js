var Sequelize = require("sequelize")
var db = require("./db");

// More information about how to define a model: http://docs.sequelizejs.com/en/v3/docs/models-definition/
var User = db.define('user', {
    userName: {
        type: Sequelize.STRING,
        field: 'user_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

db.sync();

module.exports = User;