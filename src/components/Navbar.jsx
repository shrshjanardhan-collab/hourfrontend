export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-surface/70">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-headline italic text-primary">
          Golden Hour Rentals
        </h1>

        <div className="hidden md:flex gap-10 font-headline text-lg">
          <a href="#about" className="text-secondary hover:text-primary transition">
            About
          </a>
          <a href="#services" className="text-secondary hover:text-primary transition">
            Services
          </a>
          <a href="#contact" className="text-secondary hover:text-primary transition">
            Contact
          </a>
        </div>

        <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2 rounded-full">
          Sign In
        </button>
      </div>
    </nav>
  );
}