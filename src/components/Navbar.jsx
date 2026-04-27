import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-serif italic text-[#735c00]">
          Golden Hour Rentals
        </h1>

        <div className="hidden md:flex space-x-10 text-lg">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <button 
        className="bg-gradient-to-r from-[#735c00] to-[#D4AF37] text-white px-6 py-2 rounded-full"
        onClick={() => navigate("/admin/login")}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
