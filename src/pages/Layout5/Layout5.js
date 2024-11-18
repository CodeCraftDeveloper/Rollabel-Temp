import React from "react";
import NavBar from "../../Layout/Navbar";
import Section from "./Section";

const Layout5 = () => {
  return (
    <React.Fragment>
      <NavBar isDark={true} />
      {/* import Section */}
      <Section />
    </React.Fragment>
  );
};

export default Layout5;
