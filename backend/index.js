require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();
const helmet = require('helmet');
const user = require('./app/routes/users');
const company = require("./app/routes/companys");
const job = require('./app/routes/jobs');
const profile = require('./app/routes/userProfile');
const {DB_URL} = process.env;

mongoose.connect(DB_URL)
    .then(result => console.log('successfull connected to the database'))
    .catch(err => console.log("not connected"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use('/api/users',user);
app.use('/api/companys',company);
app.use('/api/',job);
app.use('/api/users',profile);

app.get('/',(req,res)=>{
  res.send("welcome to app");
});
app.listen(5000,()=>{
  console.log('listening to the port 8080');
})

// DB_URL=mongodb+srv://shivam:shivamkapar@cluster0.1jsn5ru.mongodb.net/test
// JWT_SECRET=passowrd