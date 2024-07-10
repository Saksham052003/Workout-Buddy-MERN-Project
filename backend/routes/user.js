const express= require('express')


//controller fuction
const { loginUser, signupUser } = require('../controllers/userController')



const router = express.Router()

// logine routs 
router.post('/login',loginUser)


// signup routs
router.post('/signup',signupUser)

module.exports= router