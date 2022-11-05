import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/index";
import Bookings from "./Bookings";
import Home from "./Home";
import { useAuth } from "../firebase";

const Signin = () => {
  const currUser = useAuth();
  return (
    <>
      <Navbar />
      {currUser ? <Bookings /> : null}
      {currUser ? <Home  /> : null}

      <Footer />
    </>
  );
};

export default Signin;
