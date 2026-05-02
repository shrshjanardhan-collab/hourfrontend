import "./App.css";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RentPage from "./pages/RentPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Rent Page */}
      <Route path="/rent" element={<RentPage />} />

      {/* Services Page */}
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  )
}

export default App;
