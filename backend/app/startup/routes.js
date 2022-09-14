const express = require('express');
const user = require('../routes/users');
const company = require("../routes/companys");
const job = require('../routes/jobs');
const profile = require('../routes/userProfile');
const cors = require('cors');
const helmet = require("helmet");

module.exports = function(app){
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
  app.use(helmet());
  app.use('/api/users',user);
  app.use('/api/companys',company);
  app.use('/api',job);
  app.use('/api',profile);
}

