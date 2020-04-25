import React from "react";
import GoogleMap from "./GoogleMap";
import { CasesWithMapsContext } from "../context";

const MapsApp = () => {
  const data = CasesWithMapsContext();
  return data.length !== 0 ? <GoogleMap data={data} /> : null;
};

export default MapsApp;
