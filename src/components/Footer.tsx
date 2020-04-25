import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "#369E99",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1rem 0.25rem",
    color: "#BFBFBF",
    [theme.breakpoints.up(768)]: {
      marginLeft: 120,
    },
    [theme.breakpoints.down(500)]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  atag: {
    color: "inherit",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper square className={classes.paper}>
      <div>
        <Typography variant="caption" style={{ display: "block" }}>
          &#9400;{new Date().getFullYear()}
        </Typography>
        <Typography variant="caption" style={{ display: "block" }}>
          Designed by Jun
        </Typography>
        <Typography variant="caption">Developed by Jun</Typography>
      </div>
      <div>
        <Typography variant="caption" style={{ display: "block" }}>
          Powered by Reactjs | Material-ui | Styled-components
        </Typography>
        <Typography variant="caption">
          Sourced from{" "}
          <a
            className={classes.atag}
            href="https://github.com/mathdroid/covid19"
          >
            Mathdroid
          </a>{" "}
          |{" "}
          <a
            className={classes.atag}
            href="https://covid19-docs.chrismichael.now.sh/"
          >
            Swagger
          </a>
          |{" "}
          <a className={classes.atag} href="https://disease.sh/">
            Chrismichael
          </a>
        </Typography>
      </div>
    </Paper>
  );
};

export default Footer;
