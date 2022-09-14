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
    location:{
      type:String,
      required:true
    },
    duration:{
      type:String,
      maxlength:255
    },
    salary:{
      type:String,
      maxlength:10,
    },
    skillRequired:{
      type:Array,
      required:true,
      default:[]
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
      isCompany:{
        type:Boolean,
        default:true
      },
      isPremium:{
        type:Boolean,
        required:true
      }
    }
});

exports.Job = mongoose.model('Job',jobSchema);

