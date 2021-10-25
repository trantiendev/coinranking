import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const SparklineChart = ({ coinPrice, color }) => {
  //Trigger timestamp: api don't have timestamp for each history data in resquest /coins :)
  const [timestamp, setTimestamp] = useState([]);

  useEffect(() => {
    setTimestamp(...coinPrice);
  }, [coinPrice]);

  const data = {
    labels: timestamp,
    datasets: [
      {
        label: false,
        data: coinPrice,
        fill: false,
        borderColor: color,
        pointRadius: 0,
        borderWidth: 1
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
    },

    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} width={150} height={30} />;
};

export default SparklineChart;
