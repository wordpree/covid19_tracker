export interface IGMaps {
  updated: Date;
  country: string;
  countryInfo: {
    _id: number;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
}

export interface IBar {
  y: string | number;
  label: string;
  indexLabel: string;
}

export interface IPie {
  y: string;
  label: string;
}

export type Country = {
  TotalCases: string;
  NewCases: string;
  TotalDeaths: string;
  NewDeaths: string;
  TotalRecovered: string;
  ActiveCases: string;
  TotalTests: string;
  Continent: string;
  Deaths_1M_pop: string;
  Country: string;
  Serious_Critical: string;
  Tests_1M_Pop: string;
  TotCases_1M_Pop: string;
};

export interface IBrief {
  cases: number;
  deaths: number;
  recovered: number;
  active_cases: [
    {
      currently_infected_patients: number;
      inMidCondition: number;
      criticalStates: number;
    }
  ];
  closed_cases: [
    {
      cases_which_had_an_outcome: number;
      recovered: number;
      deaths: number;
    }
  ];
  countries: Country[];
}

export interface IDaily {
  totalConfirmed: number;
  deltaConfirmed: number;
  deaths: {
    total: number;
  };
  reportDate: string;
}
