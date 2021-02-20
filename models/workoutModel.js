const mongoose = require("mongoose")

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
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
                required: "Workout name is required."
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
})


const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout