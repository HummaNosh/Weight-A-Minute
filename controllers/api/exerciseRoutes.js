const router = require('express').Router();
const { ExerciseBank, ExerciseRecord } = require('../../models');
const withAuth = require('../../utils/auth');

// Post new exercise record.
router.post('/', async (req, res) => {
    try {
        console.log("Request recieved.")
        console.log(req.session.user_id);
        // Make exercise name all caps (so that there are no repeated exercises in the bank).
        const newExerciseName = req.body.exerciseName.toUpperCase();

        // Check bank database for exercise by exercise name, create new if doesn't exist.
        const [row, created] = await ExerciseBank.findOrCreate({
            where: {exerciseName: newExerciseName},
            defaults: {
                icon: req.body.icon
            }
        });        
        
        // Create a new set of exercise data using the request and the returned 'row.id' value. 
        // Want to try and include session data for '1' - at the moment creates record for only workout 1.
        const newExerciseData = await createExerciseRecord(req.body, row.id, 1);

        // Creates a new exercise record and saves it to the exercise bank. 
        const exerciseRecord = await ExerciseRecord.create(newExerciseData);
        
        res.status(200).json(exerciseRecord);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Export this function? 
function createExerciseRecord(body, bank_id, workout_id) {
    console.log("Create Exercise Record running");
    console.log(bank_id, workout_id);
    console.log(body.unit);
    return {
        "sets": body.sets,
        "unit": body.unit,
        "workout_id": workout_id,
        "bank_id": bank_id,
        "reps1": body.reps1,
        "reps2": body.reps2,
        "reps3": body.reps3,
        "reps4": body.reps4,
        "reps5": body.reps5,
        "weight1": body.weight1,
        "weight2": body.weight2,
        "weight3": body.weight3,
        "weight4": body.weight4,
        "weight5": body.weight5
    }
};

module.exports = router;