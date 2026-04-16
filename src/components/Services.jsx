const Services = () => {
  const services = [
    { title: "Rent Complexes", desc: "Multi-unit commercial spaces" },
    { title: "Submit Shop", desc: "Retail solutions" },
    { title: "Tenant Plans", desc: "Flexible leasing options" },
  ];

  return (
    <section id="services" className="py-24 bg-[#fbfbe2]">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-serif mb-10">Tailored Solutions</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-[#e4e4cc] rounded-xl">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;