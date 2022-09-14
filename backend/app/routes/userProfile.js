const express = require('express');
const router = express.Router();
const {viewUserProfile , editUserProfile, applyJob} = require('../controllers/userProfile');
const auth = require('../middleware/auth');

router.get('/userProfile',auth,viewUserProfile);
router.post('/userProfile',auth,editUserProfile);
router.post('/applyforjob',auth,applyJob);

module.exports = router;