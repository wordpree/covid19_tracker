import React from "react";
import { makeStyles } from "@material-ui/core";
import MobileMenu from "./MobileMenu";
import Navigation from "../Navigation";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    padding: "1.5rem 0.5rem",
    alignItems: "center",
    justifyContent: "space-between",
    "&>div:nth-child(2)>a:last-child": {
      color: "#FF383D",
      border: "2px solid #FB4C47",
      borderRadius: 40,
      padding: "4px 14px",
    },
  },
  mobile: {
    display: "inline-block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const menu = ["Overview", "Contagion", "Symptoms", "Prevention", "Contact"];
  return (
    <div className={classes.header}>
      <Navigation />
      <div className={classes.mobile}>
        <MobileMenu menu={menu} />
      </div>
    </div>
  );
};

export default Header;
