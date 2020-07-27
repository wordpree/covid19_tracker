import React, { useContext, useState, useEffect } from "react";
import { IGMaps } from "../util/type";
import { fetchData } from "../util";

interface IBCProps {
  children: React.ReactNode;
}

const casesWithMaps = React.createContext<IGMaps | null>(null);
export const CasesWithMapsProvider = ({ children }: IBCProps) => {
  const [cases, setCases] = useState<IGMaps | null>(null);
  const urlCountry = "https://corona.lmao.ninja/v2/countries";
  const urlAll = "https://corona.lmao.ninja/v2/all";
  useEffect(() => {
    const promises = async () => {
      const promise = [urlAll, urlCountry].map((url) => fetchData(url));
      const res = await Promise.all(promise);
      setCases({
        all: res[0],
        countries: res[1],
      });
    };
    promises();
  }, []);
  return (
    <casesWithMaps.Provider value={cases}>{children}</casesWithMaps.Provider>
  );
};

export const CasesWithMapsContext = () => useContext(casesWithMaps);
