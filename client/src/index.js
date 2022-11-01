import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />

      <App />
    
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
