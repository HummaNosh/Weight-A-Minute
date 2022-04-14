const router = require("express").Router();
const historyRoutes = require("./historyRoutes");
const userRoutes = require("./userRoutes");
const workoutRoutes = require("./workoutRoutes");
const exerciseRoutes = require("./exerciseRoutes");

router.use("/users", userRoutes);
router.use("/workout", workoutRoutes);
router.use("/exercise", exerciseRoutes);
router.use("/history", historyRoutes);

module.exports = router;
