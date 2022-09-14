const { default: mongoose } = require('mongoose');
const winston = require('winston');




module.exports = function (){
  mongoose.connect(DB_URL)
      .then(result => console.log('successfull connected to the database'))
      .catch(err => {
        winston.error(err);
        process.exit(1)
      });
}