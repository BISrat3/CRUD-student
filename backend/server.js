const express = require('express')
const mongoose = require ('mongoose') 
const cors = require('cors');
const morgan = require('morgan');
const models = require('./models')
const app = express()

require('./config/db.connection')

const db = require('./models')

// // Models

// const StudentSchema = new mongoose.Schema({
//     fname:String,
//     lname:String,
//     phonenumber:String,
//     stateCode:Number,
//     stateName:String,
// })


// const Student = mongoose.model ("Student", StudentSchema);

// Middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes 

app.get("/", (req,res)=>{
    res.send("hello world")
})

// Index Route
app.get('/student', async (req,res)=>{
    try{
        res.json(await db.find({}));

    }
    catch (error){
        res.status(400).json(error);
    }
})

app.post("/student", async (req,res) =>{
    try {
        res,json(await db.create(req.body));
    } catch (error){
        res.status(400).json(error);
    }
})

app.listen(process.env.PORT, ()=>
    console.log(`Listening on port:${process.env.PORT}`))