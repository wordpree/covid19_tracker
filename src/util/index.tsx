import { IGMapsAll } from "./type";
import { confirm, death, flag } from "../svg";

export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    if (res.ok !== true) throw new Error("fetch failed from server");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDate = (date: number) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    timeZoneName: "short",
  };
  return new Date(date).toLocaleString("en-Au", options);
};

export const sortGlobalData = (data: IGMapsAll) => {
  const { cases, deaths, affectedCountries } = data;
  return [
    {
      img: confirm,
      content: normalNum(cases),
      title: "Confirmed Cases",
      titleColor: "rgb(245, 195, 48)",
      bgColor: "rgb(245, 195, 48,0.1)",
    },
    {
      img: death,
      content: normalNum(deaths),
      title: "Total Death",
      titleColor: "rgb(244, 74, 69)",
      bgColor: "rgb(244, 74, 69,0.1)",
    },
    {
      img: flag,
      content: `${affectedCountries}`,
      title: "Infected Country",
      titleColor: "rgb(125, 205, 205)",
      bgColor: "rgba(125, 205, 205, 0.1)",
    },
  ];
};

const normalNum = (num: number) => {
  const arr = `${num}`.split("");
  return arr.reduce((acc, curr, index) => {
    const left = arr.length - index - 1;
    if (left % 3 === 0 && left !== 0) {
      return acc + curr + ",";
    }
    return acc + curr;
  }, "");
};
