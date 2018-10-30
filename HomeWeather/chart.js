// Labels along the x-axis
var days = [1,2,3,4,5,6,7];
// Labels along the y-axis
var temperature = [22,23,28,23,26,21,20];
var humidity = [33,38,41,50,47,42,46,40];
var ctx = document.getElementById("temperature");
var temperature = new Chart(ctx, {
  type: 'line',
  data: {
    labels: days,
    datasets: [
      { 
        data: temperature,
        label: "Temperature",
        borderColor: "darkgoldenrod",
        fill: false
      }
    ]
  }
});

var ctx = document.getElementById("humidity");
var humidity = new Chart(ctx, {
  type: 'line',
  data: {
    labels: days,
    datasets: [
	  { 
        data: humidity,
        label: "Humidity",
        borderColor: "Darkslategray",
        fill: false
      }
    ]
  }
});





