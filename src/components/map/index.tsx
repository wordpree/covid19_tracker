import React from "react";
import GoogleMap from "./GoogleMap";
import { CasesWithMapsContext } from "../context";

const MapsApp = () => {
  const data = CasesWithMapsContext();
  return data && data.hasOwnProperty("all") && data.countries.length ? (
    <GoogleMap data={data} />
  ) : null;
};

export default MapsApp;
