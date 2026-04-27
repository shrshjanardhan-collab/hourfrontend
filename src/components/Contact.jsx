const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#f5f5dc]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 bg-white rounded-xl overflow-hidden shadow-xl">
        
        <div className="p-10">
          <h2 className="text-3xl font-serif mb-4">Let's connect.</h2>
          <p>Email: thegoldenhourindia@gmail.com</p>
          <p>Phone: +91 88238 20583</p>
        </div>

        <form className="p-10 bg-[#e4e4cc] space-y-4">
          <input className="w-full p-3 rounded" placeholder="Full Name" />
          <input className="w-full p-3 rounded" placeholder="Company" />
          <textarea className="w-full p-3 rounded" placeholder="Message" />
          <button className="w-full bg-gradient-to-r from-[#735c00] to-[#D4AF37] text-white py-3 rounded">
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;