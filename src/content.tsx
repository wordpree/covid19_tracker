import { air, contact, object } from "./svg";

export const banner = {
  alert: "COVID-19 Alert",
  title: "Stay At Home To Protect Yourself and Others",
  content:
    "In Australia, the people most at risk of getting the virus are people who have recently been overseas or have been in close contact with someone diagnosed with COVID-19 or people in group residential settings or in correctional and detention facilities",
};

export const virusInfo = {
  alert: "What Is Covid-19",
  title: "Coronavirus",
  content:
    "COVID-19 is a respiratory illness caused by a new virus. Symptoms include fever, coughing, a sore throat and shortness of breath. The virus can spread from person to person. These can range from the common cold to more serious diseases.COVID-19 is a disease caused by a new form of coronavirus. It was first reported in December 2019 in Wuhan City in China. Currently there is no treatment for COVID-19.",
};

export const contagion = {
  alert: "COVID-19 Spread",
  title: "Contagion",
  content:
    "COVID-19 are a large family of viruses that cause respiratory infections. It is a new disease, so there is no existing immunity in our community. This means that it could spread widely and quickly.",
};

export const contagionCard = [
  {
    title: "Human contacts",
    image: contact,
    content:
      "Close contact with an infectious person (48 hours before they had symptoms)",
  },
  {
    title: "Air Transmission",
    image: air,
    content: "Contact with droplets from an infected person’s cough or sneeze.",
  },
  {
    title: "Contagious Objects",
    image: object,
    content:
      "Touching objects or surfaces that have droplets from an infected person",
  },
];

export const symptomps = {
  alert: "COVID-19",
  title: "Symptomps",
  content:
    "Symptoms of COVID-19 can range from mild illness to pneumonia. Some people will recover easily, and others may get very sick very quickly. People with coronavirus may experience symptoms such as runny nose, headache, muscle or joint pains, nausea, diarrhoea, vomiting, loss of sense of smell, altered sense of taste, loss of appetite and fatigue",
};
