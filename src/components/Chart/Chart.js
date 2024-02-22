import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const options = {
  type: "bar",
  indexAxis: "x",
  bezierCurve: true,
  tension: 1,
  scales: {
    x: {
      border: {
        color: "#FFFFFF",
      },
    },
    y: {
      border: {
        color: "#FFFFFF",
      },
      ticks: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function Chart() {
  const data = {
    labels: ["2 pm", "3 pm", "6 pm", "10 pm"],
    datasets: [
      {
        labels: [0, 1, 2, 3, 4, 5, , 6, 7, 8, 9, 10, 11, 12, 14, 15],
        data: [5, 4, 3, 4, 5],
        backgroundColor: "#4D431D",
        borderColor: "#FFCC00",
        fill: {
          target: "origin",
          below: "#4D431D",
        },
      },
    ],
  };
  return (
    <div className="h-1/2 w-1/2 flex justify-center">
      <Line options={options} data={data} />
    </div>
  );
}

export default Chart;
