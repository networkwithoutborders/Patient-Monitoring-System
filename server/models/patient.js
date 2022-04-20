const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema(
  {
  
    firstname: {
        type: String,
        
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
        
      },
      gender: {
        type: String,
        
      },
      bloodgroup: {
        type: String,
        
      },
      phone: {
        type: String,
        
      },
      address:{
          type: String,
         
      }
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("patient", PatientSchema);