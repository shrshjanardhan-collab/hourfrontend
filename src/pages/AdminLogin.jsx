import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP (you’ll replace with backend auth later)
    if (form.email === "admin@goldenhour.com" && form.password === "admin") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbe2] flex flex-col justify-between">

      {/* MAIN CENTER */}
      <div className="flex flex-col items-center justify-center flex-grow px-6">

        {/* Logo */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl italic text-[#735c00] font-serif">
            Golden Hour Rentals
          </h1>
          <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">
            Administrator Portal
          </p>
        </div>

        {/* CARD */}
        <div className="w-full max-w-md bg-[#f5f5dc] rounded-2xl p-8 shadow-lg relative overflow-hidden">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#735c00]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

          <h2 className="text-2xl font-bold mb-2">Admin Login</h2>
          <p className="text-gray-600 mb-6">Please enter your credentials.</p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="text-xs uppercase text-gray-500 font-semibold">
                Email
              </label>
              <div className="relative mt-1">
                <input
                  type="email"
                  placeholder="admin@goldenhour.com"
                  className="w-full p-4 rounded-lg outline-none"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-xs uppercase text-gray-500 font-semibold">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-4 rounded-lg outline-none"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-[#735c00] to-[#d4af37] hover:scale-95 transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <button className="text-[#735c00] text-sm underline">
              Forgot Password?
            </button>
          </div>
        </div>

        {/* STATUS */}
        <div className="mt-10 flex gap-6 text-gray-400 text-xs">
          <span>• Server: US-East-1</span>
          <span>🔒 Secure Session</span>
        </div>
      </div>

      {/* FOOTER */}
      <div className="py-6 px-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <p>© 2024 Golden Hour Rentals</p>
        <div className="flex gap-4">
          <button>Privacy Policy</button>
          <button>Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;