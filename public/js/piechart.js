

anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "Balanced Diet", value: 50},
        {x: "Avoiding food", value: 20},
        {x: "Stay active!!", value: 50},
        {x: "Maintaining regular sleep pattern", value: 30},
        {x: "Stress management", value: 20},
        {x: "Supplementation", value: 10},
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Key elements to a healthy lifestyle");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('container');
    chart.draw();
  
  });
