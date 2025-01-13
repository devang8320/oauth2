const express = require('express');
const Router = express.Router();
const { googleAuth2 } = require('../controllers/authController')

Router.get("/google", googleAuth2);

module.exports = Router;