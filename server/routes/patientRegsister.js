const express = require('express')
const router = express.Router()

const {getPatient, setPatient} = require('../controllers/patientRegisterController')

router.get('/getpatient', getPatient)

// REGISTER NEW PATIENT
router.post("/setPatient", setPatient)


module.exports = router