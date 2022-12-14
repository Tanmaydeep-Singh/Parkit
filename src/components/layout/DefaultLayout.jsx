import React from "react";

// components
import Footer from "../Footer";
import Navbar from "../Navbar/index";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
        <Footer />
      </>
    );
  };

export default DefaultLayout;
