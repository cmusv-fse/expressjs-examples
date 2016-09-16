var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index_controller');

router.get('/', indexController.login); /* GET login page. */

module.exports = router;
