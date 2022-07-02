const express = require('express')
const mongoose = require ('mongoose') 

const app = express()

require('dotenv').config()

app.listen(process.env.PORT, ()=>
    console.log(`Listening on port:${process.env.PORT}`))