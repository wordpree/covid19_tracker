import React from "react";
import { makeStyles } from "@material-ui/core";
import { symptomps } from "../content";
import TextContent from "./TextContent";
import { symptomps as symptompsSvg } from "../svg";

const useStyles = makeStyles((theme) => ({
  entry: {
    marginTop: "6rem",
  },
  contentWrapper: {
    padding: "0.5rem 1.5rem",
    margin: "0 auto",
    minWidth: "65%",
    maxWidth: 550,
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
    },
  },
  img: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    margin: "0 auto",
    display: "block",
  },
}));

const Symptomps = () => {
  const classes = useStyles();
  return (
    <div className={classes.entry}>
      <div className={classes.contentWrapper}>
        <TextContent {...symptomps} />
      </div>
      <div>
        <img src={symptompsSvg} alt="symptomps" className={classes.img} />
      </div>
    </div>
  );
};

export default Symptomps;
