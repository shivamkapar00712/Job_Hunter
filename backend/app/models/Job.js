// title salary duration descrption usera

const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true,
      maxlength:255,
    },
    description:{
      type:String,
      maxlength:1024,
      default:'best Job'
    },
    duration:{
      type:String,
      maxlength:255
    },
    salary:{
      type:String,
      maxlength:10,
    },
    company:{
      _id:mongoose.Types.ObjectId,
      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true
      },
      isPremium:{
        type:Boolean,
        required:true
      }
    }
});

exports.Job = mongoose.model('Job',jobSchema);

