import express from 'express';
import mongoose from  "mongoose";
import dotenv from "dotenv";
import authRouter from './routes/auth/auth.js'
import bodyParser from 'body-parser';
dotenv.config();
const app=express();
app.use(express.json())
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.get('/',(req,res)=>{
    res.send("my new api")
}) 
mongoose
.connect(process.env.MONGO_URI,{

})
.then(()=>{
    console.log("connected to DB")
})
.catch((error)=>console.log(`${error} did not connect`))

app.use('/', authRouter)
app.listen(2002,()=> console.log("Iam running on port 2002"))