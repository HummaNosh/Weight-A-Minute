const router = require("express").Router();
const User = require("../../models");
const { ExerciseRecord } = require("../../models");
outer.get("/", async (req, res) => {
  try {
    // if (!req.session.logged_in) {
    //   res.status(400).json({ message: "You are not logged in." });
    //   return;
    // }
