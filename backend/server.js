const express = require('express')
const mongoose = require ('mongoose') 

const app = express()

require('./config/db.connection')


app.listen(process.env.PORT, ()=>
    console.log(`Listening on port:${process.env.PORT}`))