const express = require('express');
const router = express.Router();


const action = require('../services/doctor/action');

router.use(require('../middlewares/authenticate'));

router.get('/opd/search', action.opdSearch);


module.exports = router;
