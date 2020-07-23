import React from "react";
import { Button, makeStyles } from "@material-ui/core";

interface ICProps {
  children: React.ReactNode;
}

const useStyles = makeStyles({
  btn: {
    borderRadius: 40,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

const CustomizedBtn = ({ children }: ICProps) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.btn}
      size="medium"
    >
      {children}
    </Button>
  );
};

export default CustomizedBtn;
