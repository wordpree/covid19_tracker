import React from "react";
import GoogleMap from "./GoogleMap";
import { CasesWithMapsContext } from "../context";

const MapsApp = () => {
  const data = CasesWithMapsContext();
  return data && data.hasOwnProperty("all") && data.countries.length ? (
    <div style={{ marginBottom: "4rem" }}>
      <GoogleMap data={data} />
    </div>
  ) : null;
};

export default MapsApp;
