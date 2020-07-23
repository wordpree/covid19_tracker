import React, { useState } from "react";
import { Menu, Close } from "mdi-material-ui";
import { motion } from "framer-motion";
import { Button, makeStyles } from "@material-ui/core";
import { listVariants, menuVariants, listChildVariants } from "../../frMotion";

interface IMProps {
  menu: string[];
}

const useStyles = makeStyles((theme) => ({
  dropback: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "80%",
    maxWidth: 350,
    height: 550,
    background: "linear-gradient(180deg,#FFF 0%,#FFF1F4 100%)",
    zIndex: 99,
  },
  ul: {
    paddingTop: "2rem",
    paddingLeft: "2rem",
    marginTop: "10%",
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
  },
  a: {
    padding: "1rem",
    textDecoration: "none",
    color: "#035755",
    "&:hover": {
      background: "#FFF2F5",
    },
  },
  btn: {
    zIndex: 100,
  },
}));

const MobileMenu = ({ menu }: IMProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);
  return (
    <motion.div initial="hidden" animate={open ? "visible" : "hidden"}>
      <motion.div className={classes.dropback} variants={menuVariants}>
        <motion.ul className={classes.ul} variants={listVariants}>
          {menu.map((m) => (
            <motion.a
              href={`#${m}`}
              className={classes.a}
              variants={listChildVariants}
              key={m}
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.1, originX: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              {m}
            </motion.a>
          ))}
        </motion.ul>
      </motion.div>
      <Button onClick={handleClick} className={classes.btn}>
        {open ? <Close /> : <Menu />}
      </Button>
    </motion.div>
  );
};

export default MobileMenu;
