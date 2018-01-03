let ctx = document.getElementById('myChart').getContext('2d');

var chartData = {
  labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
  datasets: [{
    label: "Temperature",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 40, 19, 86, 27]        
  }, {
    label: "Humidty",
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 27, 90, 28, 48]        
  }]
};
var options = {
  animation: false,
  //Boolean - If we want to override with a hard coded scale
  scaleOverride: true,
  //** Required if scaleOverride is true **
  //Number - The number of steps in a hard coded scale
  scaleSteps: 10,
  //Number - The value jump in the hard coded scale
  scaleStepWidth: 10,
  //Number - The scale starting value
  scaleStartValue: 0
};

var myLineChart = new Chart(ctx).Line(chartData, options);

setInterval(function() {
  setData(chartData.datasets[0].data);
  setData(chartData.datasets[1].data);
  setLabels(chartData.labels);

  var myLineChart = new Chart(ctx).Line(chartData, options);
}, 1000);

function setLabels(labels) {
  var nextMonthIndex = months.indexOf(labels[labels.length - 1]) + 1;
  var nextMonthName = months[nextMonthIndex] != undefined ? months[nextMonthIndex] : "00:00";
  labels.push(nextMonthName);
  labels.shift();
}

function setData(data) {
  data.push(Math.floor(Math.random() * 100) + 1);
  data.shift();
}

function convertMonthNameToNumber(monthName) {
  var myDate = new Date(monthName + " 1, 2016");
  var monthDigit = myDate.getMonth();
  return isNaN(monthDigit) ? 0 : (monthDigit + 1);
}

var months = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];