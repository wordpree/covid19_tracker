import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Navigation from "./Navigation";
import { Youtube, Reddit, Linkedin, Twitter } from "mdi-material-ui";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    padding: "2rem 1.5rem",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    "&>div": {
      margin: "1rem 0",
      [theme.breakpoints.up("md")]: {
        flex: "0 1 33.3%",
        marginBottom: "inherit",
      },
    },
    "&>div:nth-child(2)": {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    "&>div:nth-child(1)": {
      "&>h6": {
        fontSize: "0.9rem",
      },
      "&>img": {
        maxWidth: 30,
        marginRight: "0.75rem",
      },
    },
    "&>div:nth-child(2)>a": {
      fontSize: "0.8rem",
    },
  },
  rights: {
    margin: "0 auto",
    padding: "1rem",
    display: "block",
    color: "#035755",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const socialIcons = [
    <Linkedin fontSize="small" className="linkedin" />,
    <Youtube fontSize="small" className="youtube" />,
    <Reddit fontSize="small" className="reddit" />,
    <Twitter fontSize="small" className="twitter" />,
  ];
  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <Navigation socialList={socialIcons} />
      </div>
      <Typography variant="caption" component="span" className={classes.rights}>
        &#9400;{new Date().getFullYear()} All rights reserved. Develop by Jun.
        Design inspired by{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.uistore.design/items/covid-19-landing-page-for-figma/"
        >
          Shamima Nasrin
        </a>
      </Typography>
    </div>
  );
};

export default Footer;
