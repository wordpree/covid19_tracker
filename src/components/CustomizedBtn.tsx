import React from "react";
import { Button, makeStyles } from "@material-ui/core";

interface ICProps {
  children: React.ReactNode;
  color: "primary" | "secondary";
  href: string;
}

const useStyles = makeStyles({
  btn: {
    borderRadius: 35,
    fontWeight: "bold",
    textTransform: "capitalize",
    width: 118,
    marginTop: "1rem",
  },
});

const CustomizedBtn = ({ children, color, href }: ICProps) => {
  const classes = useStyles();
  return (
    <Button
      href={href}
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
