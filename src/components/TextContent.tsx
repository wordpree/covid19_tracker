import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

interface ITProps {
  title: string;
  alert: string;
  content: string;
}

const useStyles = makeStyles({
  alert: {
    color: "#FA5652",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    color: "#035755",
  },
  content: {
    padding: "1.5rem 0.5rem 0.5rem",
  },
});

const TextContent = ({ title, alert, content }: ITProps) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.alert}>{alert}</Typography>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.content}>{content}</Typography>
    </>
  );
};

export default TextContent;
