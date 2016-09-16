var User = require("../models/user");

module.exports = {
    allUser: function(req, res, next) {
        var userName = req.query.userName;
        console.log(userName);
        User.findAll().then(function(users) {
           res.render('users', { userName: userName, users: users })
        });
    },
    createUser: function(req, res, next) {
        User.create({ userName: req.body.userName }).then(function(user) {
            res.redirect("/users?userName="+user.get("userName"));
        });
    }
};