import React from "react";
import Chart from "./Chart";
import { IPie } from "../util/type";

interface IPCProps {
  data: IPie[];
}

const CasePortion = ({ data }: IPCProps) => {
  const options = {
    animationEnabled: true,
    theme: "light1",
    backgroundColor: "#F5DEB3",
    title: {
      text: `Novel covid-19 cases pie stasticts - ${new Date().toDateString()}`,
      fontSize: 20,
      padding: 10,
    },
    axisX: {
      title: "Cases numbers",
      reversed: true,
    },
    dataPointMaxWidth: 40,
    legend: {
      verticalAlign: "center",
      horizontalAlign: "left",
    },
    data: [
      {
        type: "pie",
        startAngle: 90,
        toolTipContent: "<b>{label}</b>: {y}%",
        indexLabel: "{y}%",
        showInLegend: "true",
        legendText: "{label}",
        dataPoints: data,
      },
    ],
  };
  return <Chart options={options} />;
};

export default CasePortion;
