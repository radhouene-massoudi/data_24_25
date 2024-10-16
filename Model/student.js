const mongoose=require('mongoose')

student=new mongoose.Schema({
    name:{type: String},
    age:{type: Number},
    email:{type: String}
})
module.exports=mongoose.model('students', student)