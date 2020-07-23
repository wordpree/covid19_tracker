import React from "react";
import { Button, makeStyles } from "@material-ui/core";

interface ICProps {
  children: React.ReactNode;
  color: "primary" | "secondary";
}

const useStyles = makeStyles({
  btn: {
    borderRadius: 35,
    fontWeight: "bold",
    textTransform: "capitalize",
    width: 118,
  },
});

const CustomizedBtn = ({ children, color }: ICProps) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color={color}
      className={classes.btn}
      size="medium"
    >
      {children}
    </Button>
  );
};

export default CustomizedBtn;
