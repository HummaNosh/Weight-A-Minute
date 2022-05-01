const writeNames = (data) => {
    document.querySelector("#name-1").innerHTML = "Hello";
    document.querySelector("#name-2").innerHTML = "Goodbye";
    document.querySelector("#name-3").innerHTML = "One More Thing";
};

const writeDates = (data) => {
    document.querySelector("#date-1").innerHTML = "Hello";
    document.querySelector("#date-2").innerHTML = "Goodbye";
    document.querySelector("#date-3").innerHTML = "One More Thing";
};

const writeSets = (data) => {
    document.querySelector("#sets-1").innerHTML = data[0].sets;
    document.querySelector("#sets-2").innerHTML = data[1].sets;
    document.querySelector("#sets-3").innerHTML = data[2].sets;
};

const writeReps = (data) => {
    document.querySelector("#reps-1").innerHTML = "Hello";
    document.querySelector("#reps-2").innerHTML = "Goodbye";
    document.querySelector("#reps-3").innerHTML = "One More Thing";
}

const writeWeights = (data) => {
    document.querySelector("#weights-1").innerHTML = "Hello";
    document.querySelector("#weights-2").innerHTML = "Goodbye";
    document.querySelector("#weights-3").innerHTML = "One More Thing";
};


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
    const recent = [data[total-1], data[total-2], data[total-3]];
    return recent;
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