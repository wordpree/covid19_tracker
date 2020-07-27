import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Header from "./header/Header";
import Banner from "./Banner";
import Contagion from "./Contagion";
import Symptomps from "./Symptomps";
import Protect from "./Protect";
import CaseMap from "./CaseMap";
import VirusInfo from "./VirusInfo";
import Contact from "./Contact";
import Footer from "./Footer";
import { CasesWithMapsProvider } from "./context";

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down(450)]: {
      padding: 0,
    },
  },
  root: {
    background:
      "linear-gradient(180deg,#FFF1F4 0%,rgba(255,241,241,0.1)  100%)",
    overflow: "hidden",
  },
  cAft: {
    background:
      "linear-gradient(180deg,rgba(255,241,241,0.1)  0%,rgba(255,241,241,0.4) 100%)",
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
        <Protect />
        <CasesWithMapsProvider>
          <CaseMap />
        </CasesWithMapsProvider>
        <div className={classes.cAft}>
          <Contact />
          <Footer />
        </div>
      </div>
    </Container>
  );
};

export default Layout;
