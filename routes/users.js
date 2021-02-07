var express = require('express');
var router = express.Router();

const usersService = require('../controllers/usersService')

router.get('/usernameValidate/:username', usersService.userValidate);
router.get('/getAllUsers', usersService.getAllUsers);
router.post('/signup', usersService.signup);

module.exports = router;
