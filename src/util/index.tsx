import { IBrief, Country } from "./type";

export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    if (res.ok !== true) throw new Error("fetch failed from server");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const normalData = (data: string) => {
  return parseInt(data.replace(/[,+]/g, ""));
};

export const pieDataSort = (data: IBrief) => {
  if (!data.hasOwnProperty("cases")) return [];

  const { cases, deaths, recovered, active_cases } = data;
  const recoveredRate = ((100 * recovered) / cases).toFixed(2);
  const mildRate = ((100 * active_cases[0].inMidCondition) / cases).toFixed(2);
  const criticalRate = ((100 * active_cases[0].criticalStates) / cases).toFixed(
    2
  );
  const deathRate = ((100 * deaths) / cases).toFixed(2);
  const ret = [
    { y: recoveredRate, label: "Recovered" },
    { y: deathRate, label: "Deaths" },
    { y: criticalRate, label: "Critical" },
    { y: mildRate, label: "Mild" },
  ];
  return ret;
};

export const barDataSort = (data: IBrief) => {
  if (!data.hasOwnProperty("cases")) return [];

  const { cases, deaths, recovered, active_cases } = data;
  const ret = [
    {
      y: cases,
      label: "All",
      indexLabel: "{y}",
    },
    {
      y: active_cases[0].currently_infected_patients,
      label: "Active",
      indexLabel: "{y}",
    },
    {
      y: recovered,
      label: " Recovered",
      indexLabel: "{y}",
    },

    {
      y: active_cases[0].inMidCondition,
      label: "Middle",
      indexLabel: "{y}",
    },
    {
      y: active_cases[0].criticalStates,
      label: " Critical",
      indexLabel: "{y}",
    },
    {
      y: deaths,
      label: " Death",
      indexLabel: "{y}",
    },
  ];
  return ret;
};

export const pieDataSortByCountry = (data: Country) => {
  const {
    TotalCases,
    TotalDeaths,
    TotalRecovered,
    ActiveCases,
    Serious_Critical,
  } = data;
  const pieCases = {
    TotalCases: normalData(TotalCases),
    TotalDeaths: normalData(TotalDeaths),
    TotalRecovered: normalData(TotalRecovered),
    ActiveCases: normalData(ActiveCases),
    Serious_Critical: normalData(Serious_Critical),
  };
  const mildCases = pieCases.ActiveCases - pieCases.Serious_Critical;

  const recoveredRate = (
    (100 * pieCases.TotalRecovered) /
    pieCases.TotalCases
  ).toFixed(2);
  const deathRate = (
    (100 * pieCases.TotalDeaths) /
    pieCases.TotalCases
  ).toFixed(2);
  const criticalRate = (
    (100 * pieCases.Serious_Critical) /
    pieCases.TotalCases
  ).toFixed(2);
  const mildRate = ((100 * mildCases) / pieCases.TotalCases).toFixed(2);

  const ret = [
    { y: recoveredRate, label: "Recovered" },
    { y: deathRate, label: "Deaths" },
    { y: criticalRate, label: "Critical" },
    { y: mildRate, label: "Mild" },
  ];
  return ret;
};

export const barDataSortByCountry = (data: Country, type: string) => {
  const {
    NewCases,
    NewDeaths,
    Deaths_1M_pop,
    Tests_1M_Pop,
    TotCases_1M_Pop,

    TotalCases,
    TotalDeaths,
    TotalRecovered,
    ActiveCases,
    Serious_Critical,
  } = data;

  const barCases = {
    NewCases: normalData(NewCases) || 0,
    NewDeaths: normalData(NewDeaths) || 0,
    Deaths_1M_pop: normalData(Deaths_1M_pop) || 0,
    Tests_1M_Pop: normalData(Tests_1M_Pop) || 0,
    TotCases_1M_Pop: normalData(TotCases_1M_Pop) || 0,

    TotalCases: normalData(TotalCases),
    TotalDeaths: normalData(TotalDeaths),
    TotalRecovered: normalData(TotalRecovered),
    ActiveCases: normalData(ActiveCases),
    Serious_Critical: normalData(Serious_Critical),
  };
  const retNew = [
    {
      y: barCases.NewCases,
      label: "New cases",
      indexLabel: "{y}",
    },
    {
      y: barCases.NewDeaths,
      label: "New death",
      indexLabel: "{y}",
    },
    {
      y: barCases.Deaths_1M_pop,
      label: "Deaths Per M",
      indexLabel: "{y}",
    },
    {
      y: barCases.TotCases_1M_Pop,
      label: "Cases Per M",
      indexLabel: "{y}",
    },
  ];
  const ret = [
    {
      y: barCases.TotalCases,
      label: "All",
      indexLabel: "{y}",
    },
    {
      y: barCases.ActiveCases,
      label: "Actived",
      indexLabel: "{y}",
    },
    {
      y: barCases.TotalDeaths,
      label: "Death",
      indexLabel: "{y}",
    },
    {
      y: barCases.TotalRecovered,
      label: "Recovered",
      indexLabel: "{y}",
    },

    {
      y: barCases.ActiveCases - barCases.Serious_Critical,
      label: "Mild",
      indexLabel: "{y}",
    },
    {
      y: barCases.Serious_Critical,
      label: "Critical",
      indexLabel: "{y}",
    },
  ];
  return type === "new" ? retNew : ret;
};
