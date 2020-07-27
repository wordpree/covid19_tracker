import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import TextContent from "./TextContent";
import { leftLight } from "../svg";
import { contagion, contagionCard } from "../content";

const useStyles = makeStyles((theme) => ({
  entry: {
    marginTop: "4rem",
  },
  textWrapper: {
    padding: "0.5rem 1.5rem",
    margin: "0 auto",
    maxWidth: 420,
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      maxWidth: 480,
      margin: "0 auto",
      paddingBottom: "2rem",
    },
  },
  gridWrapper: {
    position: "relative",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      padding: "0 3rem",
    },
  },
  card: {
    maxWidth: 468,
    margin: "0 auto",
    borderRadius: 10,
    [theme.breakpoints.up("md")]: {
      maxWidth: "none",
    },
  },
  media: {
    maxWidth: 240,
    margin: "0 auto",
    paddingTop: "1.5rem",
  },
  cardContent: {
    textAlign: "center",
    padding: "2.5rem 1rem !important",
    "&>h6": {
      color: "#035755",
      fontWeight: "bold",
    },
  },
  img: {
    transform: "translate(-50%)",
    position: "absolute",
    maxWidth: 68,
    left: 0,
    bottom: -30,
  },
}));

const Contagion = () => {
  const classes = useStyles();
  return (
    <div className={classes.entry} id="Contagion">
      <div className={classes.textWrapper}>
        <TextContent {...contagion} />
      </div>
      <div className={classes.gridWrapper}>
        <Grid container spacing={3}>
          {contagionCard.map((c) => (
            <Grid item xs={12} md={4} key={c.title}>
              <Card className={classes.card} raised>
                <CardMedia
                  src={c.image}
                  className={classes.media}
                  component="img"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">{c.title}</Typography>
                  <Typography variant="body2">{c.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <img src={leftLight} alt="virus" className={classes.img} />
        </Grid>
      </div>
    </div>
  );
};

export default Contagion;
