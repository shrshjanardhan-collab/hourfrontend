function Footer() {
  return (
    <footer className="bg-[#f5f5dc] p-10 flex flex-col md:flex-row justify-between">
      
      <div>
        <h2 className="font-serif text-lg text-[#735c00]">
          Golden Hour Rentals
        </h2>
        <p className="text-sm text-gray-500">
          © 2024 Golden Hour Rentals
        </p>
      </div>

      <div className="flex gap-6 text-sm mt-4 md:mt-0">
        <a>Terms</a>
        <a>Privacy</a>
        <a>Contact</a>
      </div>

    </footer>
  );
}

export default Footer;