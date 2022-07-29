const mongoose= require('mongoose');
const express = require('express');
const router = express.Router();
const {createJob , browseJobs,selectedJob} = require('../controllers/jobs');
const auth = require('../middleware/auth');


router.post('/companys/createjob',auth,createJob);

router.get('/users/browseJobs',auth,browseJobs);

router.get('/users/browseJobs/:id',auth,selectedJob)
module.exports = router;