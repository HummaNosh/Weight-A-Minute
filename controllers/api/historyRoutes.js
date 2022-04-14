const router = require("express").Router();
const User = require("../../models");
const { ExerciseRecord } = require("../../models");

router.get("/history", async (req, res) => {
  res.send("hello");
});
// if (!req.session.logged_in) {
//   res.status(400).json({ message: "You are not logged in." });
//   return;
// }
module.exports = router;
