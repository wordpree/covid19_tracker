import React from "react";
import { ChevronLeft, ChevronRight } from "mdi-material-ui";
import {
  Grid,
  makeStyles,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
import { CasesWithMapsContext } from "./context";
import CountryCase from "./CountryCase";
import MapsApp from "./map";
import TextContent from "./TextContent";
import { getDate } from "../util";

const useStyles = makeStyles((theme) => ({
  entry: {
    margin: "2rem auto",
    padding: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      padding: "2rem",
    },
  },
  textWrapper: {
    paddingBottom: "2.5rem",
    textAlign: "center",
  },
  country: {
    boxShadow: " 0 7px 95px rgba(0,0,0,0.07)",
    background: "linear-gradient(180deg,#FFFBFB 0%,#FDFDFD 100%)",
    [theme.breakpoints.up("md")]: {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    "&>div": {
      padding: "2rem",
    },
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    padding: "1rem 0.5rem",
  },
  title: {
    color: "#035755",
    fontWeight: "bold",
    marginRight: "auto",
  },
  iconBtn: {
    background: "#fff",
    display: "flex",
    boxShadow: "0 5px 50px rgba(87,1,0,0.1)",
    "&>span": {
      borderRadius: 0,
    },
    "&>hr": {
      height: 20,
      alignSelf: "center",
    },
  },
}));

const CaseMap = () => {
  const classes = useStyles();
  const data = CasesWithMapsContext();
  if (
    !data ||
    !data.hasOwnProperty("all") ||
    !data.hasOwnProperty("countries")
  ) {
    return null;
  }
  const { all, countries } = data;
  const outbreak = {
    alert: "COVID-19",
    title: "Coronavirus Outbreak Situation",
    content: `Update: ${getDate(all.updated)}`,
  };
  return (
    <div className={classes.entry}>
      <div className={classes.textWrapper}>
        <TextContent {...outbreak} />
      </div>
      <Grid container>
        <Grid item xs={12} md={8}>
          <MapsApp />
        </Grid>
        <Grid item xs={12} md={4} className={classes.country}>
          <div>
            <div className={classes.titleWrapper}>
              <Typography variant="h6" className={classes.title}>
                Live Reports
              </Typography>
              <div className={classes.iconBtn}>
                <IconButton
                  color="secondary"
                  aria-label="left"
                  component="span"
                  size="small"
                >
                  <ChevronLeft />
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton
                  color="primary"
                  aria-label="right"
                  component="span"
                  size="small"
                >
                  <ChevronRight />
                </IconButton>
              </div>
            </div>
            {countries
              .sort((a, b) => b.cases - a.cases)
              .slice(0, 5)
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
