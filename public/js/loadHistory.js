const writeNames = (data) => {
    document.querySelector("#name-1").innerHTML = "Hello";
    document.querySelector("#name-2").innerHTML = "Goodbye";
    document.querySelector("#name-3").innerHTML = "One More Thing";
};

const writeDates = (data) => {

};

const writeSets = (data) => {

};

const writeReps = (data) => {

}

const writeWeights = (data) => {

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

const writeData = () => {
    const recentData = readData();
    writeNames(recentData);
    writeDates(recentData);
    writeSets(recentData);
    writeReps(recentData);
    writeWeights(recentData);    
};

console.log(readData());
writeData();