import "./App.css";
import Signin from "./pages/Signin_page";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route path="/footer" element={<Footer />} />
      
    </Routes>
  );
}

export default App;
