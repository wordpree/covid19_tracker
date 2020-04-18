import React from "react";
import { IBrief } from "../../util/type";
import Chart from "../Chart";

type Active = Pick<IBrief, "active_cases">;

interface IBProps {
  active: Active["active_cases"];
}

const Brief = ({ active }: IBProps) => {
  const options = {
    animationEnabled: true,
    theme: "dark1",
    title: {
      text: "Currently Active Cases",
    },
    dataPointMaxWidth: 70,
    data: [
      {
        type: "column",
        dataPoints: [
          {
            y: active[0].currently_infected_patients,
            label: "Infected",
          },
          {
            y: active[0].inMidCondition,
            label: "Middle Condition",
          },
          {
            y: active[0].criticalStates,
            label: " Critical States",
          },
        ],
      },
    ],
  };
  return <Chart options={options} />;
};

export default Brief;
