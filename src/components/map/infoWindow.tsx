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

const useStyles = makeStyles((theme) => ({
  card: {
    background: "none",
    [theme.breakpoints.up(768)]: {
      background: "#01B3A7",
    },
    overflow: "auto",
  },
  typo: {
    color: "gray",
    [theme.breakpoints.up(768)]: {
      color: "#ddd",
    },
  },
  avatar: {
    [theme.breakpoints.down(768)]: {
      background: "#ccc",
    },
  },
  span: {
    color: "#000",
    fontWeight: "bold",
    padding: "4px 2px",
    marginLeft: "0.25rem",
    [theme.breakpoints.up(768)]: {
      color: "#fff",
      fontWeight: "bold",
      padding: "4px 2px",
      marginLeft: "0.5rem",
    },
  },
}));

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
    Confirmed: cases || 0,
    Recovered: recovered || 0,
    Death: deaths || 0,
    Critical: critical || 0,
    New_cases: todayCases || 0,
    New_death: todayDeaths || 0,
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
        classes={{ avatar: classes.avatar }}
        avatar={<Avatar src={countryInfo.flag} alt={country} />}
        title={country}
        subheader={new Date(updated).toDateString()}
      ></CardHeader>
      <CardContent>{lists}</CardContent>
    </Card>
  );
};

export default InfoWindowContent;
