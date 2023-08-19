const mongoose=require('mongoose')
const TaskSchema= new mongoose.Schema({
    task:{
        type:String,
        required:[true,'must provide a task'],
        trim:true,
        maxlength:[30, "Task can't be more than 20 words"]
    },
    
    completed:{
        type:Boolean,
        // default:false
    }
})

module.exports=mongoose.model('Task',TaskSchema);