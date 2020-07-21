import React from "react";
import { Container } from "@material-ui/core";
import Header from "./Header";
import Banner from "./Banner";
import TabNav from "./TabNav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Container>
        <div
          style={{ background: "linear-gradient(180deg,#FFF1F4 0%,#FFF 100%)" }}
        >
          <Header />
          <Banner />
        </div>
        {/* <div style={{ minHeight: "90vh" }}>
          <TabNav />
        </div> */}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
