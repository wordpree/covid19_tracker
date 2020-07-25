import React from "react";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";

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
  const lg = useMediaQuery("(min-width:1200px)");
  return (
    <>
      <Typography className={classes.alert}>{alert}</Typography>
      <Typography variant={lg ? "h3" : "h4"} className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.content}>{content}</Typography>
    </>
  );
};

export default TextContent;
