import React from "react";
import { IBrief } from "../../util/type";
import Chart from "../Chart";

const Brief = (props: IBrief) => {
  const { cases, deaths, recovered, active_cases } = props;

  const options = {
    animationEnabled: true,
    backgroundColor: "#F5DEB3",
    theme: "light1",
    title: {
      padding: 10,
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
      titleFontColor: "#755E32",
      labelFontColor: "#755E32",
    },
    dataPointMaxWidth: 40,
    data: [
      {
        type: "column",
        dataPoints: [
          {
            y: cases,
            label: " All Cases",
            indexLabel: "{y}",
          },
          {
            y: active_cases[0].currently_infected_patients,
            label: "Infected",
            indexLabel: "{y}",
          },
          {
            y: recovered,
            label: " Recovered Cases",
            indexLabel: "{y}",
          },

          {
            y: active_cases[0].inMidCondition,
            label: "Middle Condition",
            indexLabel: "{y}",
          },
          {
            y: active_cases[0].criticalStates,
            label: " Critical States",
            indexLabel: "{y}",
          },
          {
            y: deaths,
            label: " Death Cases",
            indexLabel: "{y}",
          },
        ],
      },
    ],
  };
  return <Chart options={options} />;
};

export default Brief;
