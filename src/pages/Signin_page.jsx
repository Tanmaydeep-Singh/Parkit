import React from "react";

// components
import Bookings from "./Bookings";

// firebase
import { useAuth } from "../firebase";

const Signin = () => {
  const currUser = useAuth();
  return <>{currUser ? <Bookings /> : null}</>;
};

export default Signin;
