import React from "react";
import { IBrief } from "../../util/type";
import Chart from "../Chart";

type Closed = Pick<IBrief, "closed_cases">;

interface IBProps {
  closed: Closed["closed_cases"];
}

const Brief = ({ closed }: IBProps) => {
  const options = {
    animationEnabled: true,
    backgroundColor: "#F5DEB3",
    theme: "light1",
    title: {
      text: "Currently Closed Cases",
    },
    dataPointMaxWidth: 40,
    data: [
      {
        type: "column",
        dataPoints: [
          { y: closed[0].cases_which_had_an_outcome, label: "Total" },
          { y: closed[0].recovered, label: "recovered Cases" },
          { y: closed[0].deaths, label: "Deaths" },
        ],
      },
    ],
  };
  return <Chart options={options} />;
};

export default Brief;
