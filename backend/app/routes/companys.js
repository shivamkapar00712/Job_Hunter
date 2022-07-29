const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Company } = require("../models/Company");
const bcrypt = require("bcrypt");
const { validateLogin,validateRegister } = require("../validators/company");
const {companyRegister, companyLogin} = require('../controllers/companys');

router.post("/register",companyRegister);

router.post("/login", companyLogin);

module.exports = router;
