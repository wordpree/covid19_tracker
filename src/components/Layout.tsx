import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Header from "./header/Header";
import Banner from "./Banner";
import TabNav from "./TabNav";
import Footer from "./Footer";
import VirusInfo from "./VirusInfo";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down(450)]: {
      padding: 0,
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
      overflow: "hidden",
    },
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div
        style={{ background: "linear-gradient(180deg,#FFF1F4 0%,#FFF 100%)" }}
      >
        <Header />
        <Banner />
        <VirusInfo />
      </div>
      {/* <div style={{ minHeight: "90vh" }}>
          <TabNav />
        </div> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
