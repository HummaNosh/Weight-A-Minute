const router = require('express').Router();
const { WorkoutRecord } = require('../../models');
const withAuth = require('../../utils/auth'); // Add this once functioning.

// Write a new record, record the new date.
router.post('/', async (req, res) => {
    // If logged in only, else return something else. 
    try {
        const workoutData = await WorkoutRecord.create({
            ...req.body,
            user_id: req.session.user_id // Does this work? Not sure how I'd check until working with the website
        });
        res.status(200).json(workoutData.id);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Potentially an update function to update length.

// Retrieve a record, make it into a javascript object.
// This second one might be an exerciseRecordRoute or history API function?

module.exports = router;