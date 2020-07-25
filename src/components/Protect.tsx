import React from "react";
import { protect, protectMeasure } from "../content";
import TextContent from "./TextContent";
import { Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import { virusGreen, virusGnR } from "../svg";

const useStyles = makeStyles((theme) => ({
  entry: {
    marginTop: "6rem",
  },
  textWrapper: {
    padding: "0.5rem 1.5rem",
    margin: "0 auto",
    maxWidth: 500,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    "&>div>img": {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "inherit",
      },
    },
  },
  virus: {
    position: "absolute",
    top: "15%",
    left: 0,
    "&>img": {
      maxWidth: 60,
    },
  },
  virusGnR: {
    position: "absolute",
    bottom: "-2%",
    right: 0,
    "&>img": {
      maxWidth: 60,
    },
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center",
    },
    "&.reverse": {
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row-reverse",
        justifyContent: "center",
      },
    },
    "&>div": {
      [theme.breakpoints.up("sm")]: {
        flex: "0 1 50%",
      },
    },
  },
  content: {
    padding: "0.5rem 1.5rem",
    margin: "0 auto",
    maxWidth: 420,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "10%",
      margin: "auto",
      maxWidth: "none",
    },
    "&>p": {
      paddingTop: "0.5rem",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem",
      },
      [theme.breakpoints.up("sm")]: {
        lineHeight: 1.75,
      },
    },
  },
  header: {
    color: "#035755",
    fontWeight: "bold",
    position: "relative",
    "&::before": {
      display: "none",
      [theme.breakpoints.up(1124)]: {
        display: "inherit",
        fontSize: "1rem",
        position: "absolute",
        transform: "translate(-150%)",
        padding: "1rem",
        borderRadius: "50%",
        color: "#FA5652",
        background: "rgba(250, 86, 82, 0.15)",
        fontWeight: "bold",
      },
    },
    "&.header0::before": {
      content: "'01'",
    },
    "&.header1::before": {
      content: "'02'",
    },
    "&.header2::before": {
      content: "'03'",
    },
    "&.header3::before": {
      content: "'04'",
    },
  },
  img: {
    maxWidth: 250,
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      maxWidth: 480,
    },
    padding: "0.5rem",
    margin: "0 auto",
    display: "block",
  },
}));

const Protect = () => {
  const classes = useStyles();
  const lg = useMediaQuery("(min-width:1200px)");
  return (
    <div className={classes.entry}>
      <div className={classes.textWrapper}>
        <TextContent {...protect} />
      </div>
      <div className={classes.root}>
        {protectMeasure.map((p, i) => (
          <div
            key={p.title}
            className={`${classes.contentWrapper} ${
              i % 2 === 1 ? "reverse" : ""
            }`}
          >
            <div className={classes.content}>
              <Typography
                variant={lg ? "h4" : "h5"}
                className={`header${i} ${classes.header}`}
              >
                {p.title}
              </Typography>
              <Typography variant="body1">{p.content}</Typography>
            </div>
            <div>
              <img src={p.image} alt={p.title} className={classes.img} />
            </div>
          </div>
        ))}
        <div className={classes.virus}>
          <img src={virusGreen} alt="virus" />
        </div>
        <div className={classes.virusGnR}>
          <img src={virusGnR} alt="virus" />
        </div>
      </div>
    </div>
  );
};

export default Protect;
