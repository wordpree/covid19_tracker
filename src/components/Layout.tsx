import React, { useEffect, useState } from "react";
import { Brief } from "./brief";
import Options from "./Options";
import { fetchData } from "../util";
import { IBrief } from "../util/type";

const Layout = () => {
  const init = {} as IBrief;
  const url = "https://covid19-server.chrismichael.now.sh/api/v1/";
  const [briefData, setBriefData] = useState(init);

  useEffect(() => {
    const fetchBriefData = async (url: string) => {
      const { reports } = await fetchData(url);
      const {
        cases,
        deaths,
        recovered,
        active_cases,
        closed_cases,
      } = reports[0];
      setBriefData({
        cases,
        deaths,
        recovered,
        active_cases,
        closed_cases,
      });
    };
    fetchBriefData(`${url}AllReports`);
  }, []);
  return (
    <div>
      <Brief {...briefData} />
      <Options />
    </div>
  );
};

export default Layout;
