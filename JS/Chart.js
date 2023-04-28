const xValues = [50, 60, 70, 80, 90, 100, 110];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "white",
        borderColor: "#BF7208",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});

let xValue = ["Read", "New"];

let yValue = [60, 40];

let barColors = ["#574EBB"];

new Chart("myChart1", {
  type: "doughnut",

  data: {
    labels: xValue,

    datasets: [
      {
        backgroundColor: barColors,

        data: yValue,
      },
    ],
  },

  options: {
    title: {
      display: true,

      text: "No of tips read",
    },
  },
});
