const mongoose = require('mongoose');
const {User} = require('../models/User');
const auth = require('../middleware/auth')
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userLogin,userRegister, getUser} = require('../controllers/users');

router.post('/login',userLogin);
router.post('/register',userRegister);
router.get('/:id',auth,getUser)

module.exports = router;