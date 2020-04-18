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
}
