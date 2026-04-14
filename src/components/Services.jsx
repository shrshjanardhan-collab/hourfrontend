const services = [
  {
    title: "Rent Complexes",
    desc: "Multi-unit commercial complexes designed for scale.",
  },
  {
    title: "Submit Shop",
    desc: "Turnkey retail solutions with branding.",
  },
  {
    title: "Tenant Plans",
    desc: "Flexible leasing with premium services.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8 text-center mb-20">
        <h2 className="text-5xl font-headline">Tailored Solutions</h2>
        <p className="text-secondary mt-4">
          Curated services for modern businesses.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-surface-container-highest p-10 rounded-lg hover:bg-surface-container transition"
          >
            <h3 className="text-2xl font-headline text-primary mb-4">
              {s.title}
            </h3>
            <p className="text-on-surface-variant">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}