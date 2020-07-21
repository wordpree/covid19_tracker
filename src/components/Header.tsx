import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import logo from "../svg/logo.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    padding: "1.5rem 0.5rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
    display: "flex",
  },
  menu: {
    color: "#035755",
    textDecoration: "none",
    padding: "3px 6px",
    marginRight: "1.5rem",
    "&:last-child": {
      color: "#FF383D",
      border: "2px solid #FB4C47",
      borderRadius: 40,
      padding: "4px 14px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const menu = ["Overview", "Contangion", "Symptoms", "Prevetion", "Contact"];
  return (
    <div className={classes.header}>
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
    </div>
  );
};

export default Header;
