import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { CasesWithMapsContext } from "./context";
import { getDate, sortGlobalData } from "../util";
import CountryCase from "./CountryCase";
import GlobalCase from "./GlobalCase";
import TextContent from "./TextContent";
import CaseIndexIcon from "./CaseIndexIcon";
import MapsApp from "./map";

const useStyles = makeStyles((theme) => ({
  entry: {
    margin: "2rem auto",
    padding: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      padding: "2rem",
    },
  },
  case: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "2.5rem",
    flexDirection: "column",
    [theme.breakpoints.up(600)]: {
      flexDirection: "row",
    },
  },
  textWrapper: {
    paddingBottom: "2.5rem",
    textAlign: "center",
    "&>p:last-child": {
      fontSize: "0.8rem",
      color: "#7e7e7e",
    },
  },
  country: {
    boxShadow: " 0 7px 95px rgba(0,0,0,0.07)",
    background: "linear-gradient(180deg,#FFFBFB 0%,#FDFDFD 100%)",
    marginTop: "2rem",
    [theme.breakpoints.up("md")]: {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      marginTop: "inherit",
    },
    "&>div": {
      padding: 0,
      [theme.breakpoints.up(450)]: {
        padding: "1.25rem",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "2rem",
      },
    },
  },
}));

const CaseMap = () => {
  const classes = useStyles();
  const data = CasesWithMapsContext();
  const [count, setCount] = useState(0);
  const MAX_INDEX = 5;
  const MIN_INDEX = 0;
  if (
    !data ||
    !data.hasOwnProperty("all") ||
    !data.hasOwnProperty("countries")
  ) {
    return null;
  }
  const { all, countries } = data;
  const globalCase = sortGlobalData(all);
  const outbreak = {
    alert: "COVID-19",
    title: "Coronavirus Outbreak Situation",
    content: `Update: ${getDate(all.updated)}`,
  };
  const handleClickLeft = () => {
    count === MIN_INDEX ? setCount(MAX_INDEX) : setCount((prev) => prev - 1);
  };
  const handleClickRight = () => {
    count === MAX_INDEX ? setCount(MIN_INDEX) : setCount((prev) => prev + 1);
  };
  return (
    <div className={classes.entry}>
      <div className={classes.textWrapper}>
        <TextContent {...outbreak} />
      </div>
      <div className={classes.case}>
        {globalCase.map((g) => (
          <GlobalCase {...g} key={g.title} />
        ))}
      </div>
      <Grid container>
        <Grid item xs={12} md={8}>
          <MapsApp />
        </Grid>
        <Grid item xs={12} md={4} className={classes.country}>
          <div>
            <CaseIndexIcon
              handleLeft={handleClickLeft}
              handleRight={handleClickRight}
            />
            {countries
              .sort((a, b) => b.cases - a.cases)
              .slice(MAX_INDEX * count, MAX_INDEX * (count + 1))
              .map((c) => (
                <CountryCase key={c.country} data={c} />
              ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CaseMap;
