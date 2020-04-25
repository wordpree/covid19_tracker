import React from "react";
import { useMediaQuery } from "@material-ui/core";
import Chart from "./Chart";
import { IPie } from "../util/type";

interface IPCProps {
  data: IPie[];
}

const CasePortion = ({ data }: IPCProps) => {
  const md = useMediaQuery("(min-width:500px)");
  const position = md ? "outside" : "inside";
  const options = {
    animationEnabled: true,
    theme: "light1",
    backgroundColor: "#F5DEB3",
    title: {
      text: `Novel covid-19 cases pie stasticts - ${new Date().toDateString()}`,
      fontSize: 20,
      padding: 15,
    },
    legend: {
      verticalAlign: "top",
      horizontalAlign: "center",
    },
    dataPointMaxWidth: 40,
    data: [
      {
        type: "pie",
        startAngle: 90,
        toolTipContent: "<b>{label}</b>: {y}%",
        indexLabel: "{y}%",
        indexLabelPlacement: position,
        showInLegend: "true",
        legendText: "{label}",
        dataPoints: data,
      },
    ],
  };
  return <Chart options={options} />;
};

export default CasePortion;
