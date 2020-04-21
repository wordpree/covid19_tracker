import React from "react";
import { makeStyles } from "@material-ui/core";

interface ITPProps {
  index: number;
  value: number;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  div: {
    [theme.breakpoints.up(768)]: {
      marginLeft: 120,
    },
  },
}));
const TabPanel = ({ index, value, children }: ITPProps) => {
  const classes = useStyles();
  return value === index ? <div className={classes.div}>{children}</div> : null;
};

export default TabPanel;
