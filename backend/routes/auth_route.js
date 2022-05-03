const express = require("express");
const router = express.Router();

const {
  registerEmployee,
  loginEmployee,
} = require("../services/auth/auth");


router.post("/register", registerEmployee);
router.post("/login", loginEmployee);

module.exports = router;
