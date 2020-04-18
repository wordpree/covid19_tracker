import React from "react";

import CanvasJSReact from "../lib/canvasjs.react";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ options }: any) => {
  return <CanvasJSChart options={options} />;
};

export default Chart;
