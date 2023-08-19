const asyncWrapper=(fun)=>{
    return async(req,res,next)=>{
        try{
            await fun(req,res,next)           
        }
        catch(error){
            next(error)
        }
    }
}

// async(req,res)=>{
//     const tasks=await Task.find({})
//     res.status(201).json(tasks);
// }

module.exports=asyncWrapper;