import "./App.css";

// react-router-dom
import { Routes, Route } from "react-router-dom";

// components
import Home from "./pages/Home";
import Signin from "./pages/Signin_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Signin />} />
    </Routes>
  );
}

export default App;
