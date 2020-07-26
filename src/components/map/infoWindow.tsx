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
    background: "rgba(250, 86, 82, 0.15)",
    overflow: "auto",
  },
  typo: {
    color: "#035755",
    fontWeight: "bold",
    fontSize: "0.8rem",
  },
  avatar: {
    borderRadius: 5,
  },
  span: {
    color: "#7B682D",
    fontWeight: "bold",
    padding: "4px 2px",
    marginLeft: "0.25rem",
  },
  content: {
    padding: "0.5rem !important",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem !important",
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
        avatar={
          <Avatar
            src={countryInfo.flag}
            alt={country}
            className={classes.avatar}
          />
        }
        title={country}
        subheader={new Date(updated).toDateString()}
        subheaderTypographyProps={{ variant: "caption" }}
      />
      <CardContent className={classes.content}>{lists}</CardContent>
    </Card>
  );
};

export default InfoWindowContent;
