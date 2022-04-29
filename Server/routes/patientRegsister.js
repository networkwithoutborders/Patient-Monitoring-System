const express = require('express')
const router = express.Router()

const {getPatient, setPatient, getPatientId} = require('../controllers/patientRegisterController')

router.get('/getpatient', getPatient)

// Get Patient ID
router.get("/:id", getPatientId)

// REGISTER NEW PATIENT
router.post("/setPatient", setPatient)


module.exports = router