const newWorkoutButton = document.querySelector('#new-workout-button');

// IF logged in: 

// Create an API post request for a new workout
const startNewWorkout = async () => {
    const response = await fetch("/api/workout", {
        method: "POST", // might need headers/body, not sure
    });
    console.log(response);
};
// Return the workout id
// Update the current workout id in local storage
// Event handler

function changeLocalStorage (input) {
	localStorage.setItem("current_workout_id", `${input}`);
	
}

function returnLocalStorage () {
	const test = localStorage.getItem("current_workout_id");
	console.log(test);
}

// startNewWorkout();

newWorkoutButton.addEventListener('click', () => {
    event.preventDefault(); // Comment this out eventually
    startNewWorkout();
});

// createExerciseButton.addEventListener('click', () => {
//     event.preventDefault();
//     const newExerciseRecord = {
//         exerciseName: exerciseName.value,
//         sets: sets.value,
//         reps1: rep1.value,
//         reps2: rep2.value,
//         reps3: rep3.value,
//         reps4: rep4.value,
//         reps5: rep5.value,
//         weight1: weight1.value,
//         weight2: weight2.value,
//         weight3: weight3.value,
//         weight4: weight4.value,
//         weight5: weight5.value,
//         unit: unitInput.value,
//         icon: exerciseType.value 
//     }
//     pushNewData(newExerciseRecord);
// });