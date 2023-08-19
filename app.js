const express=require('express')
const app=express();
const tasks=require('./routes/tasks');
const db=require('./db/connect')
require('dotenv').config();
const errorHandlerMiddleware=require('./middleware/error-handler');

//middleware
app.use(express.static('./public'))
app.use(express.json());

//routes
app.use('/api/v1/tasks',tasks);
app.use((req,res)=>{
    res.status(404).send('<h1>404 Page Not Found</h1>')
    next();
})
app.use(errorHandlerMiddleware);


const start=async()=>{
    try{
        await db(process.env.Mongodb_Url);
        app.listen(3000,console.log("server is running"));
    }
    catch(err){
        console.log(err)
    }
}
start();