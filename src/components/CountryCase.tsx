import React from "react";
import { IGMapsCountry } from "../util/type";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { motion } from "framer-motion";

interface ICProps {
  data: IGMapsCountry;
}

const useStyles = makeStyles({
  country: {
    color: "#035755",
    maxWidth: 115,
    "&>span": {
      fontWeight: "bold",
      fontSize: "0.8rem",
    },
  },
  case: {
    color: "#035755",
    "&>span": {
      fontWeight: "bold",
      fontSize: "0.8rem",
    },
  },
});

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
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={countryInfo.flag} alt="country flag"></Avatar>
          </ListItemAvatar>
          <ListItemText primary={country} className={classes.country} />
          <ListItemText primary={cases} className={classes.case} />
        </ListItem>
      </List>
    </motion.div>
  );
};

export default CountryCase;
