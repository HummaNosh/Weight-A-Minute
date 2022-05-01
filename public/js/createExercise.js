// Collect data from exercise dropdown:
const exerciseType = document.querySelector('#icon-input');

// Collect data from exercise name
const exerciseName = document.querySelector('#exercise-name');

// Collect data from sets
const sets = document.querySelector('#sets-input');

// Collect data from rep 1 - 5
const rep1 = document.querySelector('#reps-1-input');
const rep2 = document.querySelector('#reps-2-input');
const rep3 = document.querySelector('#reps-3-input');
const rep4 = document.querySelector('#reps-4-input');
const rep5 = document.querySelector('#reps-5-input');

// Collect data from weight 1 - 5
const weight1 = document.querySelector('#weight-1-input');
const weight2 = document.querySelector('#weight-2-input');
const weight3 = document.querySelector('#weight-3-input');
const weight4 = document.querySelector('#weight-4-input');
const weight5 = document.querySelector('#weight-5-input');

// Collect unit.
const unitInput = document.querySelector('#unit-input');

// Date (Needs to be with Sumaya's page);
// ID for Workout Data (Needs to be with Sumaya's page);

// BONUS: Collect data / create option buttons
const createExerciseButton = document.querySelector('#create-exercise-button');

createExerciseButton.addEventListener('click', () => {
    event.preventDefault();
    const newExerciseRecord = {
        exerciseName: exerciseName.value,
        sets: sets.value,
        reps1: rep1.value,
        reps2: rep2.value,
        reps3: rep3.value,
        reps4: rep4.value,
        reps5: rep5.value,
        weight1: weight1.value,
        weight2: weight2.value,
        weight3: weight3.value,
        weight4: weight4.value,
        weight5: weight5.value,
        unit: unitInput.value,
        icon: exerciseType.value 
    }
    console.log("New exercise data: ");
    console.log(newExerciseRecord);
    pushNewData(newExerciseRecord);
});

const pushNewData = async (newExerciseRecord) => {
    const response = await fetch('/api/exercise', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newExerciseRecord),
    });

    if (response.ok) {
        console.log("Successfully pushed new exercise data to database");
    };
};