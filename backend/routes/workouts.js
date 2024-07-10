const express = require('express')
const{
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/worloutController')

const requireAuth= require('../middleware/requireAuth')

const router= express.Router()
// require auth for all workouts routes
router.use(requireAuth)
//GET all workout
router.get('/', getWorkouts)
//GET a singe workout
router.get('/:id', getWorkout)
//POST a new workout 
router.post('/', createWorkout)
//DELETE a workout 
router.delete('/:id',deleteWorkout)
//UPDATE a workout 
router.patch('/:id',updateWorkout)

module.exports = router