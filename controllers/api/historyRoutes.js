const router = require("express").Router();
const User = require("../../models");
const { ExerciseRecord } = require("../../models");

router.get("/", async (req, res) => {
  try {
    // if (!req.session.logged_in) {
    //   res.status(400).json({ message: "You are not logged in." });
    //   return;
    // }
    console.log("hello");
    const exercise_records = await ExerciseRecord.findAll();

    /* console.log(
      exercise_records.every(
        (exercise_record) => exercise_record instanceof ExerciseRecord
      )
    ); */ // true

    const filtered = await exercise_records.filter(exRec => exRec.user_id === 4);

    console.log("All user's exercise_records: ");
    console.log(filtered); //JSON.stringify(exercise_records, null, 2)

    res.status(200).json(filtered);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
