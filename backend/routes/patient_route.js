const express = require('express');
const router = express.Router();

const action = require('../services/patient/action');

router.use(require('../middlewares/authenticate'));

router.post('/register', action.registerPatient);
router.get('/vitals', action.findPatientVitals);

module.exports = router;