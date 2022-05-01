const writeNames = (data) => {
    document.querySelector("#name-1").innerHTML = "Hello";
    document.querySelector("#name-2").innerHTML = "Goodbye";
    document.querySelector("#name-3").innerHTML = "One More Thing";
};

const writeDates = (data) => {
    document.querySelector("#date-1").innerHTML = "DATE TBC";
    document.querySelector("#date-2").innerHTML = "DATE TBC";
    document.querySelector("#date-3").innerHTML = "DATE TBC";
};

const writeSets = (data) => {
    document.querySelector("#sets-1").innerHTML = data[0].sets;
    document.querySelector("#sets-2").innerHTML = data[1].sets;
    document.querySelector("#sets-3").innerHTML = data[2].sets;
};

const writeReps = (data) => {
    document.querySelector("#reps-1").innerHTML = reps(data[0]);
    document.querySelector("#reps-2").innerHTML = reps(data[1]);
    document.querySelector("#reps-3").innerHTML = reps(data[2]);
}

const writeWeights = (data) => {
    document.querySelector("#weights-1").innerHTML = weights(data[0]);
    document.querySelector("#weights-2").innerHTML = weights(data[1]);
    document.querySelector("#weights-3").innerHTML = weights(data[2]);
};

const reps = (data) => {
    return `${data.reps1} ${data.reps2} ${data.reps3} ${data.reps4} ${data.reps5} `
}

const weights = (data) => {
    return `${data.weight1} ${data.weight2} ${data.weight3} ${data.weight4} ${data.weight5} ${data.unit}`
}

const getHistory = async () => {
    const response = await fetch('/api/history', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    
    return response.json();
}

const readData = async () => {
    const data = await getHistory();
    const total = data.length;
    if (total > 2) {
        const recent = [data[total-1], data[total-2], data[total-3]];
        return recent;
    }
    else {
        alert("Please record three exercises before trying to view your history. \n Click new workout below the table to record another exercise.")
    }
}

const writeData = async () => {
    const recentData = await readData();
    writeNames(recentData);
    writeDates(recentData);
    writeSets(recentData);
    writeReps(recentData);
    writeWeights(recentData);    
};

console.log(readData());
writeData();