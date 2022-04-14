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

    console.log(
      exercise_records.every(
        (exercise_record) => exercise_record instanceof ExerciseRecord
      )
    ); // true
    console.log(
      "All exercise_records:",
      JSON.stringify(exercise_records, null, 2)
    );

    res.status(200).json(exercise_records);
  } catch (err) {
    res.status(400).json(err);
  }
});
// if (!req.session.logged_in) {
//   res.status(400).json({ message: "You are not logged in." });
//   return;
// }
module.exports = router;
