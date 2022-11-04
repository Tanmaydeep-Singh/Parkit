import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import { MetaMaskProvider } from './hooks/useMetaMask';


const getLibrary = (provider,connection) =>{
  return new Web3(provider);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
    <MetaMaskProvider>
    <App />
    </MetaMaskProvider>
  </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
