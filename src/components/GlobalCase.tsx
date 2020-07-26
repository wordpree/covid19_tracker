import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

interface IGProps {
  img: string;
  content: string;
  title: string;
  titleColor: string;
  bgColor: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginRight: "0.5rem",
    padding: "0.5rem",
    flex: "0 1 33%",
    [theme.breakpoints.up(600)]: {
      maxWidth: 258,
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "2.5rem",
    },
  },
  img: {
    width: 48,
  },
  wrapper: {
    padding: "0.25rem 1rem",
    "&>span": {
      display: "block",
    },
  },
  case: {
    fontWeight: "bold",
    letterSpacing: 1.8,
  },
  text: {
    fontWeight: "bold",
  },
}));

const GlobalCase = ({ img, content, title, bgColor, titleColor }: IGProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ background: bgColor }}>
      <div>
        <img src={img} alt={title} className={classes.img} />
      </div>
      <div className={classes.wrapper}>
        <Typography
          component="span"
          className={classes.case}
          style={{ color: titleColor }}
        >
          {content}
        </Typography>
        <Typography component="span" variant="body2" className={classes.text}>
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default GlobalCase;
