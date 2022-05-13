const express = require('express');
const router = express.Router();

const employee = require('../services/auth/auth');
const tokens = require('../services/auth/tokens');

router.post('/register', employee.registerEmployee);
router.post('/login', employee.loginEmployee);

router.get('/gentoken', tokens.generateNewTokens)


module.exports = router;
