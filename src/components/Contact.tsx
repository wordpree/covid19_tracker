import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Phone } from "mdi-material-ui";
import { attention } from "../content";
import TextContent from "./TextContent";

const uesStyles = makeStyles((theme) => ({
  entry: {
    marginTop: "5rem",
  },
  textWrapper: {
    paddingLeft: "0.75rem",
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      paddingLeft: "inherit",
    },
  },
  content: {
    marginTop: "1rem",
    padding: "1rem",
    maxWidth: "none",
    background: "#fffefd",
    marginLeft: "1rem",
    borderLeft: "4px solid #7DCDCD",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "80%",
      padding: "2rem",
    },
  },
  phone: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "1.25rem",
    paddingTop: "0.5rem",
  },
  pNumber: {
    fontSize: "1rem",
    fontWeight: "bold",
    paddingLeft: "1rem",
    color: "#035755",
  },
}));

const Contact = () => {
  const classes = uesStyles();

  return (
    <div className={classes.entry} id="Contact">
      <div className={classes.textWrapper}>
        <TextContent {...attention} />
      </div>
      <div className={classes.content}>
        <Typography variant="h6">National Coronavirus Helpline</Typography>
        <Typography>
          Call this line if you are seeking information on coronavirus
          (COVID-19) or help with the COVIDSafe app. The line operates 24 hours
          a day, seven days a week.
        </Typography>
        <div className={classes.phone}>
          <Phone fontSize="small" />
          <a href="tel:1800020080" className={classes.pNumber}>
            <span>1800 020 080</span>
          </a>
        </div>
        <Typography variant="h6"> How to get tested</Typography>
        <Typography>
          If you have cold or flu like symptoms, such as a cough, fever, sore
          throat, shortness of breath or runny nose, even if these are mild, you
          should get tested for COVID-19 as soon as possible. People with mild
          symptoms can still spread the virus. To help stop the spread of
          COVID-19, anyone with cold or flu-like symptoms should get tested.
        </Typography>
        <div className={classes.phone}>
          <span>
            If it is a medical emergency, please call
            <a href="tel:000" className={classes.pNumber}>
              000
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
