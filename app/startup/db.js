const { default: mongoose } = require('mongoose');
const winston = require('winston');
const {DB_URL} = process.env;



module.exports = function (){
  mongoose.connect("mongodb://127.0.0.1:27017/test1")
      .then(() => console.log('successfull connected to the database'))
      .catch(err => {
       console.log(err)
        process.exit(1)
      });
}
