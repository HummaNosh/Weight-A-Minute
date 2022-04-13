// const { User } = require('../models/User');

// anychart.onDocumentReady(function() {

//     // set the data
//     var data = [
//         {x: "White", value: 223553265},
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
})