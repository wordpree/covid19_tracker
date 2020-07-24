import React from "react";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import CustomizedBtn from "./CustomizedBtn";
import TextContent from "./TextContent";
import { virusInfo } from "../content";
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
            <TextContent {...virusInfo} />
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
