import React from "react";
import { IBar } from "../util/type";
import Chart from "./Chart";

interface IBCProps {
  data: IBar[];
}

const Brief = (props: IBCProps) => {
  const options = {
    animationEnabled: true,
    backgroundColor: "#F5DEB3",
    theme: "light1",
    title: {
      padding: 15,
      text: `Novel covid-19 cases bar stasticts - ${new Date().toDateString()}`,
      fontSize: 20,
    },
    axisY: [
      {
        title: "Case numbers",
        lineColor: "#369EAD",
        titleFontColor: "#369EAD",
        labelFontColor: "#369EAD",
      },
    ],
    axisX: {
      margin: 16,
      titleFontColor: "#755E32",
      labelFontColor: "#755E32",
    },
    dataPointMaxWidth: 40,
    data: [
      {
        type: "column",
        dataPoints: props.data,
      },
    ],
  };
  return <Chart options={options} />;
};

export default Brief;
