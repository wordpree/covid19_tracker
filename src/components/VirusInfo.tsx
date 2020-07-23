import React from "react";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import CustomizedBtn from "./CustomizedBtn";
import virus from "../svg/virus.svg";
import virusLight from "../svg/virusLight.svg";

const useStyles = makeStyles((theme) => ({
  entry: {
    textAlign: "center",
    position: "relative",
    "&>button": {
      color: "#FB4C47",
      width: 118,
      marginTop: "1.5rem",
    },
  },
  root: {
    display: "flex",
    marginTop: "3rem",
    textAlign: "left",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  flexLeft: {
    flex: "1 1 50%",
  },
  flexRight: {
    flex: "1 1 50%",
  },
  imgWrapper: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      padding: "2rem",
    },
  },
  img: {
    width: "100%",
    maxWidth: 350,
    [theme.breakpoints.up("sm")]: {
      maxWidth: "100%",
    },
  },
  contentWrapper: {
    padding: "0.5rem 1.5rem",
    margin: "0 auto",
    maxWidth: 420,
    "&>button": {
      color: "#FB4C47",
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
      maxWidth: "none",
      paddingLeft: "2rem",
      position: "relative",
      transform: "translateY(-50%)",
      top: "50%",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      maxWidth: 450,
    },
  },
  alert: {
    color: "#FA5652",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    color: "#035755",
  },
  content: {
    padding: "1.5rem 0",
  },
  virusLight: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inherit",
    },
    position: "absolute",
    bottom: "-4rem",
    right: 0,
    "&>img": {
      maxWidth: 88,
      [theme.breakpoints.up("md")]: {
        maxWidth: 111,
      },
    },
  },
}));
const VirusInfo = () => {
  const classes = useStyles();
  const sm = useMediaQuery("(min-width:768px)");
  return (
    <div className={classes.entry}>
      <div className={classes.root}>
        <div className={classes.flexLeft}>
          <div className={classes.imgWrapper}>
            <img src={virus} alt="virus" className={classes.img} />
          </div>
        </div>
        <div className={classes.flexRight}>
          <div className={classes.contentWrapper}>
            <Typography className={classes.alert}>What Is Covid-19</Typography>
            <Typography variant="h4" className={classes.title}>
              Coronavirus
            </Typography>
            <Typography variant="body2" className={classes.content}>
              COVID-19 is a respiratory illness caused by a new virus. Symptoms
              include fever, coughing, a sore throat and shortness of breath.
              The virus can spread from person to person. These can range from
              the common cold to more serious diseases.COVID-19 is a disease
              caused by a new form of coronavirus. It was first reported in
              December 2019 in Wuhan City in China. Currently there is no
              treatment for COVID-19.
            </Typography>
            {sm && (
              <CustomizedBtn color="secondary">Let Us Start</CustomizedBtn>
            )}
          </div>
        </div>
      </div>
      {!sm && <CustomizedBtn color="secondary">Let Us Start</CustomizedBtn>}
      <div className={classes.virusLight}>
        <img src={virusLight} />
      </div>
    </div>
  );
};

export default VirusInfo;
