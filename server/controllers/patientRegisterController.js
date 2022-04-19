const asyncHandler = require('express-async-handler')

// @desc    Get All Patient Details
// @route   GET /api/patient/getPatient
// @access  Private
const getPatient = asyncHandler(async(req, res) =>{
    res.status(200).json({ message: 'Get patient details'})
})

// @desc    Register New Patient Details
// @route   POST /api/patient/setPatient
// @access  Private
const setPatient = asyncHandler(async(req, res) =>{
    try{
        const newPatient = new Patient({
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            lastname: req.body.lastname,
            age: req.body.age,
            gender: req.body.gender,
            bloodgroup: req.body.bloodgroup,
            mobilenumber: req.body.mobilenumber,
            address: req.body.address,          
        })

        const patient =  await newPatient.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
})




module.exports ={
    getPatient, 
    setPatient
}