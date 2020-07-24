import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Header from "./header/Header";
import Banner from "./Banner";
import Contagion from "./Contagion";
import Symptomps from "./Symptomps";
import TabNav from "./TabNav";
import Footer from "./Footer";
import VirusInfo from "./VirusInfo";

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down(450)]: {
      padding: 0,
    },
  },
  root: {
    background: "linear-gradient(180deg,#FFF1F4 0%,#FFF 100%)",
    overflow: "hidden",
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.root}>
        <Header />
        <Banner />
        <VirusInfo />
        <Contagion />
        <Symptomps />
      </div>
      {/* <div style={{ minHeight: "90vh" }}>
          <TabNav />
        </div> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
