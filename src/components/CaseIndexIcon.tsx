import React from "react";
import { ChevronLeft, ChevronRight } from "mdi-material-ui";
import { makeStyles, Typography, IconButton, Divider } from "@material-ui/core";

interface ICProps {
  handleLeft(): void;
  handleRight(): void;
}

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    padding: "1rem 0.5rem",
  },
  title: {
    color: "#035755",
    fontWeight: "bold",
    marginRight: "auto",
  },
  iconBtn: {
    background: "#fff",
    display: "flex",
    boxShadow: "0 5px 50px rgba(87,1,0,0.1)",
    "&>span": {
      borderRadius: 0,
    },
    "&>hr": {
      height: 20,
      alignSelf: "center",
    },
  },
}));

const CaseIndexIcon = ({ handleLeft, handleRight }: ICProps) => {
  const classes = useStyles();
  return (
    <div className={classes.titleWrapper}>
      <Typography variant="h6" className={classes.title}>
        Live Reports
      </Typography>
      <div className={classes.iconBtn}>
        <IconButton
          color="secondary"
          aria-label="left"
          component="span"
          size="small"
          onClick={handleLeft}
        >
          <ChevronLeft />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton
          color="primary"
          aria-label="right"
          component="span"
          size="small"
          onClick={handleRight}
        >
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export default CaseIndexIcon;
