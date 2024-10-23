const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    firstname:{
        required:true,
        type:String
    },
    lastname:{
        required:true,
        type:String
    },
    age:{
        required:true,
        type:Number
    },
    qualification:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    }
})

const employees = mongoose.model('employees',employeeSchema)

module.exports = employees 

