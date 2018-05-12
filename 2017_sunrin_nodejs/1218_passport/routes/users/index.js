const express = require('express');
const passport = require('passport');

const controller = {
    user : require('./userController.js')
}
const router = express.Router()
router.get('/',controller.user.checkLogin)
router.post('/',passport.authenticate('local'))
