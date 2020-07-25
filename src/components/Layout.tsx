import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Header from "./header/Header";
import Banner from "./Banner";
import Contagion from "./Contagion";
import Symptomps from "./Symptomps";
import Protect from "./Protect";
import CaseMap from "./CaseMap";
import Footer from "./Footer";
import VirusInfo from "./VirusInfo";
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
        <Protect />
        <CasesWithMapsProvider>
          <CaseMap />
        </CasesWithMapsProvider>
      </div>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
