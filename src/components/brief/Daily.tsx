import React from "react";
import Chart from "../Chart";
import { DailyCasesContext } from "../context";
import { IDaily } from "../../util/type";

const Daily = () => {
  const data: IDaily[] = DailyCasesContext();
  if (data.length === 0) return null;
  const confirm = data.map((item) => ({
    x: new Date(item.reportDate),
    y: item.totalConfirmed,
  }));

  const newCases = data.map((item) => ({
    x: new Date(item.reportDate),
    y: item.deltaConfirmed,
  }));

  const deathCases = data.map((item) => ({
    x: new Date(item.reportDate),
    y: item.deaths.total,
  }));

  const options = {
    animationEnabled: true,
    toolTip: {
      content: "{name}: {y}",
    },
    backgroundColor: "#F5DEB3",
    axisY: {},
    axisX: {
      valueFormatString: "DD MMM",
      interval: 3,
      intervalType: "day",
    },
    title: {
      text: "New confirmed cases vs death cases around world",
    },
    data: [
      {
        name: "New cases",
        showInLegend: true,
        type: "column",
        dataPoints: newCases,
      },
      {
        name: "Death cases",
        showInLegend: true,
        type: "spline",
        dataPoints: deathCases,
      },
    ],
  };
  return <Chart options={options} />;
};

export default Daily;
