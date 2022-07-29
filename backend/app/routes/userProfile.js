const express = require('express');
const router = express.Router();
const {viewUserProfile} = require('../controllers/userProfile');
const auth = require('../middleware/auth');

router.get('/userProfile',auth,viewUserProfile);

module.exports = router;