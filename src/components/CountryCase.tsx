import React from "react";
import { IGMapsCountry } from "../util/type";
import { makeStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

interface ICProps {
  data: IGMapsCountry;
}

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    alignItems: "center",
    padding: "1rem 2rem",
  },
  img: {
    maxWidth: 45,
    height: "auto",
  },
  country: {
    color: "#035755",
    paddingLeft: "10%",
    "&>span": {
      fontWeight: "bold",
      fontSize: "0.8rem",
    },
  },
  case: {
    color: "#035755",
    marginLeft: "auto",
    "&>span": {
      fontWeight: "bold",
      fontSize: "0.8rem",
    },
  },
}));

const CountryCase = ({ data }: ICProps) => {
  const classes = useStyles();
  const { cases, countryInfo, country } = data;
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 90, mass: 0.8 },
      }}
    >
      <div className={classes.list}>
        <Typography component="span">
          <img
            src={countryInfo.flag}
            alt="country flag"
            className={classes.img}
          />
        </Typography>
        <Typography
          component="span"
          className={classes.country}
          variant="body2"
        >
          {country}
        </Typography>
        <Typography component="span" className={classes.case} variant="body2">
          {cases}
        </Typography>
      </div>
    </motion.div>
  );
};

export default CountryCase;
