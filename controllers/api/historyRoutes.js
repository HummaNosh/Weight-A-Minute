const router = require("express").Router();
const User = require("../../models");
const { ExerciseRecord, ExerciseBank } = require("../../models");

router.get("/", async (req, res) => {
  try {
    console.log("The history API route is being used.");
    console.log(req.session.user_id);
    const exercise_records = await ExerciseRecord.findAll({
      where: {
        user_id: req.session.user_id
      }
    } 
    );

    // const filtered = await exercise_records.filter(exRec => exRec.user_id === 4);

    res.status(200).json(exercise_records);
  } catch (err) {
    res.status(400).json(err);
  }
});

/*
router.get("/exercisename", async (req, res) => {
  try {
    console.log("Finding the exercise name");

  }
})
*/

module.exports = router;
