var express = require('express');
var router = express.Router();
var userController = require('../controllers/users_controller');

router.get('/', userController.allUser);    /* GET list all user */
router.post('/', userController.createUser);    /* POST create user */

module.exports = router;
