const express = require('express')
const mongoose = require ('mongoose') 
require("dotenv").config()

const {MONGODB_URL} = process.env
const cors = require('cors');
const morgan = require('morgan');

const app = express()

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(MONGODB_URL);
// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

  ///////////////////////////////
// MODELS
////////////////////////////////
  const studentSchema = new mongoose.Schema(
        {
        firstname:{
            type:String,
        },
        lastname:{
            type:String,
        }, 
        phonenumber:{
            type:String,
        },
        stateCode:{
            type:Number,
            default:0,
            min: 0,
            max:10,
        },
        stateName:{
            type:String,
        }
        })
    
        const Student= mongoose.model('Student', studentSchema)
// Middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes 

app.get("/", (req,res)=>{
    res.send("Student Record")
})

app.get("/student", async (req, res) => {
    try {
      // get all people
        res.json(await Student.find({}));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

app.post("/student", async (req, res) => {
    try {
      // send all people
        res.json(await Student.create(req.body));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

// // Index Route
// app.get('/student', async (req,res)=>{
//     try{
//         res.json(await db.find({}));

//     }
//     catch (error){
//         res.status(400).json(error);
//     }
// })

// app.post("/student", async (req,res) =>{
//     try {
//         res,json(await db.create(req.body));
//     } catch (error){
//         res.status(400).json(error);
//     }
// })

app.listen(process.env.PORT, ()=>
    console.log(`Listening on port:${process.env.PORT}`))