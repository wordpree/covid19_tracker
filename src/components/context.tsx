import React, { useContext, useState, useEffect } from "react";
import { IBrief, IDaily, IGMaps } from "../util/type";
import { fetchData } from "../util";

interface IBCProps {
  children: React.ReactNode;
}

const briefCases = React.createContext({} as IBrief);
export const BriefCasesProvider = ({ children }: IBCProps) => {
  const [brief, setBrief] = useState({} as IBrief);
  const url = "https://covid19-server.chrismichael.now.sh/api/v1/AllReports";
  useEffect(() => {
    const fetchBriefData = async (url: string) => {
      const { reports } = await fetchData(url);
      const {
        cases,
        deaths,
        recovered,
        active_cases,
        closed_cases,
        table,
      } = reports[0];
      setBrief({
        cases,
        deaths,
        recovered,
        active_cases,
        closed_cases,
        countries: table[0] || [],
      });
    };
    fetchBriefData(url);
  }, []);
  return <briefCases.Provider value={brief}>{children}</briefCases.Provider>;
};
export const BriefCasesContext = () => useContext(briefCases);

const dailyCases = React.createContext([] as IDaily[]);
export const DailyCasesProvider = ({ children }: IBCProps) => {
  const [daily, setDaily] = useState([] as IDaily[]);
  const url = "https://covid19.mathdro.id/api/daily";
  useEffect(() => {
    const fetchBriefData = async (url: string) => {
      const res = await fetchData(url);
      setDaily(res);
    };
    fetchBriefData(url);
  }, []);
  return <dailyCases.Provider value={daily}>{children}</dailyCases.Provider>;
};
export const DailyCasesContext = () => useContext(dailyCases);

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
