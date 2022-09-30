const { default: mongoose } = require('mongoose');
const winston = require('winston');
const {DB_URL} = process.env;



module.exports = function (){
  mongoose.connect(DB_URL)
      .then(() => console.log('successfull connected to the database'))
      .catch(err => {
       console.log(err)
        process.exit(1)
      });
}
