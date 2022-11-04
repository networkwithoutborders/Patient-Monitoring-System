const asyncHandler = require('express-async-handler');
const { Patient, PatientId, PatientVitals } = require('../../models/Patient');
const PatientRepo = require('../../repository/patient_repo');

const registerPatient = asyncHandler(async (req, res) => {
    const body = req.body;
    const { uid } = req.key;

    const patientId = new PatientId(
        body.id_num,
        body.id_type,
    );

    const details = body.details;
    const patient = new Patient(
        details.name,
        details.age,
        details.gender && details.gender[0].toUpperCase(),
        uid,
        body.severity
    );

    const vitals = body.vitals;
    const patientVitals = new PatientVitals(
        vitals.bp,
        vitals.temperature,
        vitals.pulse,
        vitals.pain,
        vitals.respiratory_rate,
        vitals.cbg,
        vitals.spo2,
        vitals.avpu
    );

    const patientUid = await PatientRepo.registerPatient(patient, patientId, patientVitals);

    res.send({msg: 'Successfuly Registered', 
        patient_uid: patientUid});

});

const findPatientVitals = asyncHandler(async (req, res) => {
    const pUid  = req.query.uid;

    const vitals = await PatientRepo.findPatientVitals(pUid);

    res.send(vitals);
});

module.exports = {
    registerPatient,
    findPatientVitals,
};