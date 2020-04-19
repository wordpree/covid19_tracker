import React from "react";
import Chart from "../Chart";

interface IBProps {
  cases: number;
  deaths: number;
  recovered: number;
}

const All = ({ cases, deaths, recovered }: IBProps) => {
  const options = {
    animationEnabled: true,
    theme: "light1",
    backgroundColor: "#F5DEB3",
    title: {
      text: "Novel Coronavirus cases globally",
    },
    axisX: {
      title: "Cases numbers",
      reversed: true,
    },
    dataPointMaxWidth: 40,
    data: [
      {
        type: "bar",
        dataPoints: [
          { y: cases, label: "Confirmed Cases" },
          { y: recovered, label: "recovered Cases" },
          { y: deaths, label: "Deaths" },
        ],
      },
    ],
  };
  return <Chart options={options} />;
};

export default All;
