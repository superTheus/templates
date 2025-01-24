var options = {
  chart: {
    height: 300,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  plotOptions: {
    bar: {
      columnWidth: "30%",
      borderRadius: 10,
    },
  },
  series: [
    {
      name: "Payments",
      data: [10, 40, 15, 40, 20, 35, 20, 10, 31, 43, 56, 29],
    },
  ],
  grid: {
    borderColor: "#d8dee6",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 10,
      left: 0,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  colors: ["#06c2c0", "#ce313e", "#436ccf", "#dcad10", "#828382"],
  markers: {
    size: 0,
    opacity: 0.3,
    colors: ["#06c2c0", "#ce313e", "#436ccf", "#dcad10", "#828382"],
    strokeColor: "#ffffff",
    strokeWidth: 1,
    hover: {
      size: 7,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$" + val + "k";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#payments"), options);

chart.render();
