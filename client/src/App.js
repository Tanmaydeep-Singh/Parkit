import "./App.css";
import Signin from "./pages/Signin_page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <Routes>
      <Route path="/login" element={<Signin />} />
    </Routes>
  );
}

export default App;
