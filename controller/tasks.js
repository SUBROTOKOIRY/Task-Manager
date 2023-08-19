const Task=require('../model/taskschema')
const asyncWrapper=require('../middleware/async')

                        //Get all the tasks
const alltasks=asyncWrapper(async(req,res)=>{
    // try{
    //     const tasks=await Task.find({})
    //     res.status(201).json(tasks)
    // }
    // catch(err){
    //     res.status(500).json({msg:err});
    // }
    const tasks=await Task.find({})
    res.status(201).json({tasks});
})

                        //Get a specific task   
const taskinfo=asyncWrapper(async(req,res,next)=>{
    
    const taskid=req.params.id;
    //const task=await Task.findById(req.params.id)
    const task=await Task.findOne({_id:taskid})
    if(!task){
        const error=new Error("Not Found")
        error.status=404
        next(error)
        res.status(400).json({msg:`No task with id ${taskid}`})
    }
    res.status(201).json(task);

})

                        //Create a task
const createtask= asyncWrapper(async(req,res)=>{

    const newtask=await  Task.create(req.body);     //or const newtask=await Task.create(req.body);
    newtask.save();
    res.status(201).json(newtask);


})

                        //Update a task
const updatetask=asyncWrapper(async(req,res)=>{
    
    
    const taskid=req.params.id;
    const task=await Task.findOneAndUpdate({_id:taskid},req.body,{
        new:true,   //uploads the newly changed data rather than the old one
        runValidators:true,  // checks all the validations provided in the schema
    })
    if(!task){
        res.status(400).json({msg:`No task with id ${taskid}`})
    }
    res.status(201).json(task);

})

                        //update using put
// const edittask=async(req,res)=>{
    
//     try{
//         const taskid=req.params.id;
//         const task=await Task.findOneAndReplace({_id:taskid},req.body,{
//             new:true,   //uploads the newly changed data rather than the old one
//             runValidators:true,  // checks all the validations provided in the schema
            
//         })
//         if(!task){
//             res.status(400).json({msg:`No task with id ${taskid}`})
//         }
//         res.status(201).json(task);
//     }
//     catch(err){
//         res.status(500).json({msg:err})
//     }
// }

                        //Delete a task
const deletetask=asyncWrapper(async(req,res)=>{
    
    const taskid=req.params.id;
    const task=await Task.findOneAndDelete({_id:taskid})
    if(!task){
        res.status(400).json({msg:`No task with id ${taskid}`})
    }
    res.status(201).json(task);

})


module.exports={
    alltasks,
    createtask,
    taskinfo,
    updatetask,
    deletetask
}