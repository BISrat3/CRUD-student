// const express = require('express')
// const router= express.Router()

// const db = require('../models')

// // Index Route
// // router.get('/student', async (req,res)=>{
// //     try{
// //         res.json(await db.find({}));

// //     }
// //     catch (error){
// //         res.status(400).json(error);
// //     }
// // })

// router.get('/', async (req, res, next) =>{
//     const allStudents = await db.Student.find({})
//     .populate('')
// })


// router.post("/student", async (req,res) =>{
//     try {
//         res,json(await db.create(req.body));
//     } catch (error){
//         res.status(400).json(error);
//     }
// })

// module.exports = router