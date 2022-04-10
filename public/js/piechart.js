// // const { User } = require('../models/User');

// anychart.onDocumentReady(function () {
//   // set the data
//   // create the chart
//   var data = [
//     { x: "White", value: 223553265 },
//     { x: "Black or African American", value: 38929319 },
//     { x: "American Indian and Alaska Native", value: 2932248 },
//     { x: "Asian", value: 14674252 },
//     { x: "Native Hawaiian and Other Pacific Islander", value: 540013 },
//     { x: "Some Other Race", value: 19107368 },
//     { x: "Two or More Races", value: 9009073 },
//   ];
//   var chart = anychart.pie();

//   // set the chart title
//   chart.title("Population by Race for the United States: 2010 Census");

//   // add the data
//   chart.data();
//   chart.container("container");
//   chart.draw();

// });


//  async function fetchData() {
//     const urldata = require(".HistoryData.json");
//     const response = await fetch(urldata);
//     const datapoints = await response.json();
//     console.log(datapoints);
//     return datapoints;
// }

// anychart.onDocumentReady(function() {

//     const urldata = require(".HistoryData.json");

//     // set the data
//     var urldata = [
//         {const: "http://localhost:3001/HistoryData.json"},

//         {x: "Black or African American", value: 38929319},
//         {x: "American Indian and Alaska Native", value: 2932248},
//         {x: "Asian", value: 14674252},
//         {x: "Native Hawaiian and Other Pacific Islander", value: 540013},
//         {x: "Some Other Race", value: 19107368},
//         {x: "Two or More Races", value: 9009073}
//     ];
  
//     // create the chart
//     var chart = anychart.pie();
  
//     // set the chart title
//     chart.title("Population by Race for the United States: 2010 Census");
  
//     // add the data
//     chart.data(data);
  
//     // display the chart in the container
//     chart.container('container');
//     chart.draw();
  
//   });

































// anychart.onDocumentReady(function() {

//     // set the data
// var fetchData = [
//     {x:"hjhujjlk"},
// ]



// })
// fetchData().then(datapoints => {
//     const id = datapoints.historydata[0].financials.map(
//         function(index){
//             return index.id;
//         }
//     )
//     console.log(id);
//     myChart.config.data.labels = id;
//     myChart.update();
// })
// fetchData();
//     // create the chart
//     var chart = anychart.pie();
  
//     // set the chart title
//     chart.title("Population by Race for the United States: 2010 Census");
  
//     // add the data
//     chart.data(fetchData);
  
//     // display the chart in the container
//     chart.container('container');
//     chart.draw();
//     async function fetchData() {
       
//         const response = await fetch(urldata);
//         const datapoints = await response.json();
//         console.log(datapoints);
//         return datapoints;
      
//   };
 
// var xmlhttp = new XMLHttpRequest();
// // var url = require("./HistoryData.json")
// // var url = "http://localhost:3001/HistoryData.json";

// console.log(xmlhttp)
// xmlhttp.open("GET",url);
// // xmlhttp.send();
// xmlhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         var data = JSON.parse(this.responseText);
//         //console.log(data)
//         history = data.history_data.map(function(elem){
//             return elem.date;
//         })
//         data = data.history_data.map(function(elem){
//             return elem.population;
//         })
//         //console.log(population)

//         const ctx = document.getElementById('canvas').getContext('2d');
//         const myChart = new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 labels: id,
//                 datasets: [{
//                     label: 'Title',
//                     data: Title,
//                     backgroundColor: "#ff335e"
                    
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
//     }

// }

//This is JsonData.json
//{"date_population": [
// 		{
// 		  "date": "1941",
// 		  "population": 406760
// 		},{
// 		  "date": "1951",
// 		  "population": 778977
// 		},{
// 		  "date": "1961",
// 		  "population": 1207000
// 		}
// 	]
// }


// import Data from "./HistoryData.json"

jQuery(document).ready(function () {
     urlDataJSON = require("./HistoryData.json");

    $.getJSON(urlDataJSON, "", function (data) {
        var dataSlices = [];
        var dataLabels = "";

        $.each(data, function (entryindex, entry) {
            dataSlices.push([entry["title"], entry['sets']]);
            dataLabels = dataLabels + entry['Title'];
        });
        options = {
            legend: { show: true },
            title: 'Poll Results',
            seriesDefaults: {
                // Make this a pie chart.
                renderer: jQuery.jqplot.PieRenderer,
                rendererOptions: {
                    // Put data labels on the pie slices.
                    // By default, labels show the percentage of the slice.
                    showDataLabels: true
                }
            }
        }
        var plot = $.jqplot('chartdiv', [dataSlices], options);
    });
});       