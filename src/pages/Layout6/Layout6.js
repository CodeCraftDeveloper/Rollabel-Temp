import React from "react";
import NavBar from "../../Layout/Navbar";
import Section from "./Section";
// import SwiperSection from "./SwiperSection";

const Layout6 = () => {
  return (
    <React.Fragment>
      <NavBar isDark={true} />
      {/* import Section */}
      <Section />
      {/* <SwiperSection /> */}
    </React.Fragment>
  );
};

export default Layout6;
