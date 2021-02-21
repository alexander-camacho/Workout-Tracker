const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {

  db.Workout.find({}).then(dbWorkout => {
    console.log(dbWorkout)

    res.json(dbWorkout)
  }).catch(err => {
    res.json(err)
  })
})

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id},
    {$push: {exercises: req.body}}).then(dbWorkout => {
      res.json(dbWorkout)
    }).catch(err => {
      res.json(err)
    })
})

router.delete("/api/workouts", ({ body }, res) => {
  db.Workout.findByIdAndDelete(body.id).then(() => {
    res.json(true)
  })
  .catch(err => {
    res.json(err)
  })
})


module.exports = router;
