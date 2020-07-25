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

interface ICProps {
  data: IGMapsCountry;
}

const useStyles = makeStyles({
  country: {
    color: "#035755",
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
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={countryInfo.flag} alt="country flag"></Avatar>
        </ListItemAvatar>
        <ListItemText primary={country} className={classes.country} />
        <ListItemText primary={cases} className={classes.case} />
      </ListItem>
    </List>
  );
};

export default CountryCase;
