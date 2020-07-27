import React from "react";
import logo from "../svg/logo.svg";
import { makeStyles, Typography } from "@material-ui/core";

interface INProps {
  socialList?: React.ReactNode[];
}

const useStyles = makeStyles((theme) => ({
  brand: {
    color: "#035755",
    marginLeft: "1rem",
    display: "flex",
    alignItems: "center",
    "&>p": { fontWeight: "bold" },
  },
  logo: {
    maxWidth: 48,
    marginRight: "0.5rem",
  },
  nav: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  menu: {
    color: "#035755",
    textDecoration: "none",
    padding: "3px 6px",
    marginRight: "1.5rem",
  },
  socialWrapper: {
    "&>span": {
      color: "#035755",
      "& .youtube": { color: "#F44A45" },
      paddingRight: "1rem",
    },
  },
}));

const Navigation = (props: INProps) => {
  const classes = useStyles();
  const { socialList } = props;
  const menu = ["Overview", "Contagion", "Symptoms", "Prevention", "Contact"];
  return (
    <>
      <div className={classes.brand}>
        <img src={logo} alt="logo" className={classes.logo} />
        <Typography variant="h6">COVID-19</Typography>
      </div>
      <div className={classes.nav}>
        {menu.map((m) => (
          <Typography
            component="a"
            href={`#${m}`}
            key={m}
            className={classes.menu}
          >
            {m}
          </Typography>
        ))}
      </div>
      {socialList && (
        <div className={classes.socialWrapper}>
          {socialList.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
