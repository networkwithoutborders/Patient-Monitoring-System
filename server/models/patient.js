const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema(
  {
  
    firstname: {
        type: String,
        required: true,
        
      },
      middlename: {
        type: String,
        required: false,
        
      },
      lastname: {
        type: String,
        required: false,
        
      },
      age: {
        type: String,
        required: false,
      },
      gender: {
        type: String,
        required: false,
      },
      bloodgroup: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
      address:{
          type: String,
          required: false,
      }
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("patient", PatientSchema);