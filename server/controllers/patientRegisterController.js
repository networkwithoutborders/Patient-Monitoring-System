const asyncHandler = require("express-async-handler");

const Patient = require("../models/patient");

// @desc    Get All Patient Details
// @route   GET /api/patient/getPatient
// @access  Private
const getPatient = asyncHandler(async (req, res) => {
	const patient = await Patient.find();

	res.status(200).json(patient._id);
});

// @desc Get patient ID
// @route GET /api/patient/getPatientId
// @access Private
const getPatientId = asyncHandler(async (req, res) => {
	try {
		const patientId = await Patient.findById(req.params.id);
		res.status(200).json(patientId);
	} catch (err) {
		res.status(500).json(err);
	}
});

// @desc    Register New Patient Details
// @route   POST /api/patient/setPatient
// @access  Private
const setPatient = asyncHandler(async (req, res) => {
	try {
		const newPatient = new Patient({
			firstname: req.body.firstname,
			middlename: req.body.middlename,
			lastname: req.body.lastname,
			age: req.body.age,
			gender: req.body.gender,
			bloodgroup: req.body.bloodgroup,
			phone: req.body.phone,
			address: req.body.address,
		});

		const patient = await newPatient.save();
		res.status(200).json(patient);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = {
	getPatient,
	setPatient,
	getPatientId,
};
