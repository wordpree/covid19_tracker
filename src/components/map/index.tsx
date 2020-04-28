import React from "react";
import GoogleMap from "./GoogleMap";
import { CasesWithMapsContext } from "../context";
import spinner from "../../assets/Spinner.svg";
const MapsApp = () => {
  const data = CasesWithMapsContext();
  return data && data.hasOwnProperty("all") && data.countries.length ? (
    <div style={{ marginBottom: "2rem" }}>
      <GoogleMap data={data} />
    </div>
  ) : (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <img src={spinner} alt="spinner" style={{ margin: "3rem auto 1rem" }} />
    </div>
  );
};

export default MapsApp;
