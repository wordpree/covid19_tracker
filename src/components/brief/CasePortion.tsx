import React from "react";
import Chart from "../Chart";
import { IBrief } from "../../util/type";

const CasePortion = (props: IBrief) => {
  const { cases, deaths, recovered, active_cases } = props;

  const recoveredRate = ((100 * recovered) / cases).toFixed(2);
  const mildRate = ((100 * active_cases[0].inMidCondition) / cases).toFixed(2);
  const criticalRate = ((100 * active_cases[0].criticalStates) / cases).toFixed(
    2
  );
  const deathRate = ((100 * deaths) / cases).toFixed(2);

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
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        indexLabel: "{y}%",
        showInLegend: "true",
        legendText: "{label}",
        dataPoints: [
          { y: recoveredRate, label: "recovered Cases" },
          { y: deathRate, label: "Deaths" },
          { y: criticalRate, label: "critical Cases" },
          { y: mildRate, label: "mild Cases" },
        ],
      },
    ],
  };
  return <Chart options={options} />;
};

export default CasePortion;
