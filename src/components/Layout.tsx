import React from "react";
import TabNav from "./TabNav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <div style={{ minHeight: "90vh" }}>
        <TabNav />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
