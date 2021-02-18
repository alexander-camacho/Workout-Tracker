const mongoose = require("mongoose")

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({

    day: {
        type: Date,

    },
    exercises: [
        {
            'type': {
                type: String,
                required: "Enter the Workout type",
                trim: true,
            },
            name: {
                type: String,
                required: "Workout name is required.",
                trim: true,
            },
            duration: {
                type: Number,
                required: true,
                trim: true,
            },
            weight: {
                type: Number,
                required: true,
                trim: true,
            },
            reps: {
                type: Number,
                required: true,
                trim: true,
            },
            sets: {
                type: Number,
                required: true,
                trim: true,
            }
        }
    ]
})


const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout