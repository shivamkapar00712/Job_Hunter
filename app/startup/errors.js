const winston = require('winston')

module.exports = function(){
  winston.add(new winston.transports.File({filename:'errors.log'}));

  process.on('uncaughtException',(err)=>{
    winston.error(err)
  });
  process.on('unhandledRejection',(err)=>{
    winston.error(err)
  })
}