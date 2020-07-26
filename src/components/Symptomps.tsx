import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import { symptomps } from "../content";
import TextContent from "./TextContent";
import { symptomps as symptompsSvg, smSymptomps } from "../svg";

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
  const sm = useMediaQuery("(min-width:450px)");
  const img = sm ? symptompsSvg : smSymptomps;
  return (
    <div className={classes.entry}>
      <div className={classes.contentWrapper}>
        <TextContent {...symptomps} />
      </div>
      <div>
        <img src={img} alt="symptomps" className={classes.img} />
      </div>
    </div>
  );
};

export default Symptomps;
