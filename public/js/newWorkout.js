const newWorkoutButton = ;

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

console.log("script linked");