const mongoose = require('mongoose');
const validator= require('validator');

const studentSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3
    },
    
        email: {
            type:String,
            required: true,
            unique: [true, "email present"],
            Validite(value){
                if(!validator.isEmail(value)){
                 throw new Error("inavalid email")
                }}
            }
        ,
        phone: {
            type: Number,
            
            
            required: true,
            unique: true
        }
    ,
      address: {
          type: String,
          required: true
      }
});

//creating collection using model

const Student= new mongoose.model('Student', studentSchema);

//export page

module.exports= Student;