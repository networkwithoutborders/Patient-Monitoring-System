const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: true,
    },
    middlename: {
        type: String,
        required: false,
        unique: true,
    },
    lastname: {
        type: String,
        required: false,
        unique: true,
    },
    age:{
        type: Number,
        required: true,
        unique: true,
    },
    gender:{
        type: String,
        required: true,
        unique: true,
    },
    bloodgroup:{
        type: String,
        required: true,
        unique: true,
    },
    mobilenumber:{
        type: String,
        required: false,
        unique: true,
    },
    address:{
        type: String,
        required: false,
        unique: true,
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("patient", PatientSchema);