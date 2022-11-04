import React from "react";
import Footer from "../components/Footer";
// import Navbar_main from "../components/Navbar";
import Navbar from "../components/Navbar/index";
import Bookings from "./Bookings";

const Signin = () => {
  return (
    <>
      {/* <Navbar_main /> */}
      <Navbar />
      <Bookings />
      <Footer />
    </>
  );
};

export default Signin;
