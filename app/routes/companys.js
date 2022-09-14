const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const mongoose = require("mongoose");
const { Company } = require("../models/Company");
const bcrypt = require("bcrypt");
const {companyRegister, allCompanies, jobRequested, getCompanyByAuth, RejectRequest} = require('../controllers/companys');

router.post("/register",companyRegister);
router.get('/all',allCompanies);
router.post('/jobrequests',jobRequested);
router.post('/rejectRequest',auth,RejectRequest);
router.get('/myself',auth,getCompanyByAuth);


module.exports = router;
