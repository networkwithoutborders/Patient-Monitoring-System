const express = require('express');
const router = express.Router();
const profile = require('../services/employee/profile');
const action = require('../services/employee/action');

router.use(require('../middlewares/authenticate'));


router.get('/profile/:p', profile.findProfile);
router.get('/patients', action.listPatients);

module.exports = router;