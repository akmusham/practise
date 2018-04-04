module.exports = function(inputdata) {
  // ============================================
  // As of Chart.js v2.5.0
  // http://www.chartjs.org/docs
  // ============================================

  var chart = document.getElementById("barchart").getContext("2d"),
    gradient = chart.createLinearGradient(0, 0, 0, 450)
  gradient.addColorStop(0, "rgba(80,227,194, 0.7)")
  gradient.addColorStop(0.7, "rgba(80,227,194, 0.5)")
  gradient.addColorStop(1, "rgba(80,227,194, 0)")

  var gradient2 = chart.createLinearGradient(0, 0, 0, 450)

  gradient2.addColorStop(0, "rgba(128,124,204, 0.57)")
  gradient2.addColorStop(0.7, "rgba(128,124,204, 0.5)")
  gradient2.addColorStop(1, "rgba(128,124,204, 0)")

  var gradient3 = chart.createLinearGradient(0, 0, 0, 450)

  gradient3.addColorStop(0, "rgba(33,166,238, 0.7)")
  gradient3.addColorStop(0.7, "rgba(33,166,238, 0.5)")
  gradient3.addColorStop(1, "rgba(33,166,238, 0)")

  var data = {
    labels: inputdata.labels,
    datasets: [
      {
        label: "No of Commits",
        backgroundColor: "rgb(33,166,238)",
        pointBackgroundColor: "white",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.01)",
        data: inputdata.data1
      }
    ]
  }

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      easing: "easeInBounce",
      duration: 1520
    },
    scaleBeginAtZero: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
            lineWidth: 1
          },
          ticks: {
            beginAtZero: true,
            mirror: false,
            suggestedMin: 0,
            fontColor: "#c7c7c7",
            fontFamily: "Quicksand"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
            lineWidth: 1,
            beginAtZero: 0
          },
          ticks: {
            beginAtZero: true,
            mirror: false,
            suggestedMin: 0,
            fontColor: "#c7c7c7"
          }
        }
      ]
    },
    elements: {
      line: {
        tension: 1
      },
      point: {
        radius: 0
      }
    },
    legend: {
      display: false
    },
    point: {
      backgroundColor: "rgba(10,10,10,1)",
      pointStyle: "line",
      borderWidth: 0
    },
    tooltips: {
      titleFontFamily: "Open Sans",
      backgroundColor: "rgba(0,0,0,0.3)",
      titleFontColor: "white",
      caretSize: 5,
      cornerRadius: 2,
      xPadding: 10,
      yPadding: 10
    }
  }

  var chartInstance = new Chart(chart, {
    type: "bar",
    data: data,
    options: options
  })
}
