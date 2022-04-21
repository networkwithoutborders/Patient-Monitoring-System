const mongoose = require("mongoose");
const generateUniqueId = require('generate-unique-id');

  

const PatientSchema = mongoose.Schema(
  {
     _id: { 
      type: String, 
      default: function genUUID () { 
        const id = generateUniqueId({
          length: 6,
          useLetters: false
        });
        var pid = 'PID' + id
        return pid
       }},
  
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