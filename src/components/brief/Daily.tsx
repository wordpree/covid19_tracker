import React from "react";
import Chart from "../Chart";
import { DailyCasesContext } from "../context";
import { IDaily } from "../../util/type";

const Daily = () => {
  const data: IDaily[] = DailyCasesContext();
  if (data.length === 0) return null;
  const lastDate = new Date(data[data.length - 1].reportDate).toDateString();
  const newCases = data.map((item) => ({
    x: new Date(item.reportDate),
    y: item.deltaConfirmed,
  }));

  const deathCases = data.map((item) => ({
    x: new Date(item.reportDate),
    y: item.deaths.total,
  }));
  const conFirmedCases = data.map((item) => ({
    x: new Date(item.reportDate),
    y: item.totalConfirmed,
  }));
  const options = {
    animationEnabled: true,
    toolTip: {
      content: "{name}: {y}[{x}]",
    },
    backgroundColor: "#F5DEB3",
    axisY: [
      {
        title: "New && death cases",
        lineColor: "#369EAD",
        titleFontColor: "#369EAD",
        labelFontColor: "#369EAD",
      },
    ],
    axisX: {
      valueFormatString: "DD MMM",
      interval: 3,
      intervalType: "day",
      titleFontColor: "#755E32",
      labelFontColor: "#755E32",
    },
    title: {
      text: `Novel covid-19 cases line stasticts daily( ${lastDate})`,
      fontSize: 20,
      padding: 10,
    },
    axisY2: [
      {
        title: "confirmed cases",
        lineColor: "#7F6084",
        titleFontColor: "#7F6084",
        labelFontColor: "#7F6084",
      },
    ],
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
      {
        axisYIndex: 1,
        axisYType: "secondary",
        name: "confirmed cases",
        showInLegend: true,
        type: "spline",
        dataPoints: conFirmedCases,
      },
    ],
  };
  return <Chart options={options} />;
};

export default Daily;
