const mongoose = require('mongoose');
const {User} = require('../models/User');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userLogin,userRegister} = require('../controllers/users');

router.post('/login',userLogin);
router.post('/register',userRegister);


module.exports = router;