import React from "react";
import Footer from "../components/Footer";
// import Navbar_main from "../components/Navbar";
import Navbar from "../components/Navbar/index";
import Bookings from "./Bookings";
import { useAuth } from "../firebase";


const Signin = () => {
  const currUser = useAuth();
  return (
    <>
      <Navbar />
      {currUser ? <Bookings /> : null}

      <Footer />
    </>
  );
};

export default Signin;
