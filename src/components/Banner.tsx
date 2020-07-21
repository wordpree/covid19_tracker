import React from "react";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import banner from "../svg/banner.svg";

const useStyles = makeStyles((theme) => ({
  entry: {
    marginTop: "2rem",
    padding: "1rem 0",
  },
  infoWrapper: {
    position: "relative",
    marginLeft: "10%",
    padding: "2rem",
  },
  alert: {
    color: "#FA5652",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    color: "#035755",
  },
  content: {
    padding: "1.5rem 0",
  },
  btn: {
    borderRadius: 40,
    fontWeight: "bold",
  },
  img: {
    maxWidth: "100%",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.entry}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className={classes.infoWrapper}>
            <Typography className={classes.alert}>COVID-19 Alert</Typography>
            <Typography variant="h4" className={classes.title}>
              Stay At Home To Protect Yourself and Others
            </Typography>
            <Typography variant="body2" className={classes.content}>
              COVID-19 are a large family of viruses that cause respiratory
              infections. It is a new disease, so there is no existing immunity
              in our community. This means that It could spread widely and
              quickly. These can range from the common cold to more serious
              diseases.
            </Typography>
            <Button variant="contained" color="primary" className={classes.btn}>
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={banner} alt="stay-at-home" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
