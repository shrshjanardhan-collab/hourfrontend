import "./App.css";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RentPage from "./pages/RentPage";

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />


      <Route path="/rent" element={<RentPage />} />
    </Routes>
  )
}

export default App;
