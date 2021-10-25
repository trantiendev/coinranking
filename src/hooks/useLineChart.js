import React, { useEffect, useState } from "react";
import { useGetCryptoHistoryQuery } from "../services/cryptoApi";

const useLineChart = ({ coinId, timeperiod }) => {
  const [coinPrice, setCoinPrice] = useState([]);
  const [coinTimestamp, setCoinTimestamp] = useState([]);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod: timeperiod ? timeperiod : "24h",
  });

  useEffect(() => {
    let coinPrice = coinHistory?.data?.history?.map((item) => item.price);
    let coinTimestamp = coinHistory?.data?.history?.map((item) =>
      new Date(item.timestamp).toLocaleDateString()
    );

    setCoinTimestamp(coinTimestamp);
    setCoinPrice(coinPrice);
  }, [coinHistory]);


  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
        pointRadius: 0
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
      },
      y: {
        ticks: {
          major: {
            enabled: false
          },
        },
      },
    },
  };

  return { data, options };
};

export default useLineChart;
