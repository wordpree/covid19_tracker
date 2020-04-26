import React from "react";
import {
  Card,
  Typography,
  Avatar,
  CardHeader,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import { IGMapsCountry } from "../../util/type";

interface IIWProps {
  case: IGMapsCountry;
}

const useStyles = makeStyles({
  card: {
    background: "#01B3A7",
    overflow: "scroll",
  },
  typo: {
    color: "#ccc",
  },
  span: {
    color: "#fff",
    fontWeight: "bold",
    padding: "4px 2px",
    marginLeft: "0.25rem",
  },
});

const InfoWindowContent = (props: IIWProps) => {
  const {
    countryInfo,
    country,
    updated,
    cases,
    deaths,
    todayCases,
    todayDeaths,
    recovered,
    critical,
    tests,
  } = props.case;
  const classes = useStyles();

  const info: { [key: string]: number } = {
    Confirmed_cases: cases || 0,
    Recovered_cases: recovered || 0,
    Death_cases: deaths || 0,
    Critical_cases: critical || 0,
    Today_cases: todayCases || 0,
    Today_death: todayDeaths || 0,
    tests: tests || 0,
  };
  const lists = Object.keys(info).map((item: string) => (
    <Typography key={item} component="div" className={classes.typo}>
      {item.replace("_", " ")}{" "}
      <span className={classes.span}>{info[item]}</span>
    </Typography>
  ));

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar src={countryInfo.flag} alt={country} />}
        title={country}
        subheader={new Date(updated).toDateString()}
      ></CardHeader>
      <CardContent>{lists}</CardContent>
    </Card>
  );
};

export default InfoWindowContent;
