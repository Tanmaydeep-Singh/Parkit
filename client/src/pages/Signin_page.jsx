import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/index";
import Navbar_main from "../components/Navbar";

import WalletConnection from "../components/walletConnection";

const Signin = () => {
  return (
    <>
      <Navbar_main />
      <WalletConnection />
      <Footer />
    </>
  );
};

export default Signin;
