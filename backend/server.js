require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const workoutRouts= require('./routes/workouts')
const userRouts= require('./routes/user')

//express app
const app = express()

app.use(cors())

//middleware 
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next() 
})
//route 
app.use('/api/workouts',workoutRouts)
app.use('/api/user',userRouts)
//Conect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () =>{
            console.log('Conect to DataBase and listen on port 4000!!')
        })
        
    })
    .catch((error)=>{
        console.log(error)
    })

