import React from "react";
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import CustomizedBtn from "./CustomizedBtn";
import TextContent from "./TextContent";
import { banner } from "../content";
import bannerSvg from "../svg/banner.svg";

const useStyles = makeStyles((theme) => ({
  entry: {
    marginTop: "2rem",
    padding: "1rem 0",
  },
  infoWrapper: {
    padding: "0.5rem 1.5rem",
    margin: "0 auto",
    maxWidth: 420,
    [theme.breakpoints.up("sm")]: {
      padding: 0,
      maxWidth: "none",
      paddingLeft: "2rem",
      position: "relative",
      transform: "translateY(-50%)",
      top: "50%",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      maxWidth: 450,
    },
  },
  gridRight: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
    "&>div": {
      textAlign: "center",
      marginBottom: "1.75rem",
      [theme.breakpoints.up("sm")]: {
        textAlign: "right",
        marginBottom: 0,
      },
    },
  },
  img: {
    width: "100%",
    maxWidth: 380,
    [theme.breakpoints.up("sm")]: {
      maxWidth: "100%",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  const sm = useMediaQuery("(min-width:768px)");
  return (
    <div className={classes.entry} id="Overview">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.infoWrapper}>
            <TextContent {...banner} />
            {sm && <CustomizedBtn color="primary">Learn More</CustomizedBtn>}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridRight}>
          <div>
            <img src={bannerSvg} alt="stay-at-home" className={classes.img} />
          </div>
          {!sm && <CustomizedBtn color="primary">Learn More</CustomizedBtn>}
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
