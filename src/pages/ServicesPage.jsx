import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Interior Customization",
    description:
      "Transform your space with expert curation. From bespoke mood boards to lighting design that captures the perfect amber glow.",
    action: "Explore Finishes",
    icon: "palette",
  },
  {
    title: "Layout Planning",
    description:
      "Visualize your life before you move. Immersive 3D floor plans and optimization audits ensure perfect alignment.",
    action: "View Samples",
    icon: "architecture",
  },
  {
    title: "Utility Setup",
    description:
      "From high-speed internet to plumbing synchronization. Arrive to a fully functional home.",
    action: "Check Availability",
    icon: "bolt",
  },
  {
    title: "Full Logistics Support",
    description:
      "White-glove relocation service with packing, transport, and seamless placement.",
    action: "Book Logistics",
    icon: "local_shipping",
  },
];

function ServicesPage() {
  return (
    <main className="bg-background text-on-surface px-6 lg:px-8 py-20">

      {/* HERO */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">
        
        {/* Left */}
        <div>
          <p className="text-xs uppercase tracking-widest text-outline mb-4">
            Tailored Excellence
          </p>

          <h1 className="font-headline text-5xl md:text-6xl font-bold leading-tight mb-6">
            Elevate Your Living{" "}
            <span className="italic">Experience.</span>
          </h1>

          <p className="text-secondary max-w-xl leading-relaxed">
            Transitioning to a new space should be seamless. Our Tenant Plans are curated to turn a house into your home before you even turn the key.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxk9Z0example"
            className="rounded-3xl object-cover w-full h-[500px]"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-6 left-10 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg max-w-xs">
            <p className="italic text-primary text-sm">
              "The details are not the details. They make the design."
            </p>
          </div>
        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto mb-24">
        
        <h2 className="text-3xl font-headline mb-10 relative inline-block">
          Concierge Services
          <span className="block w-10 h-[2px] bg-primary mt-2"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto bg-surface-container-low p-12 rounded-3xl text-center relative overflow-hidden">
        
        <h3 className="text-2xl font-headline mb-4">
          Ready to curate your stay?
        </h3>

        <p className="text-secondary mb-8">
          Connect with a Personal Concierge to find the perfect plan for your residency.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold">
            Schedule a Consultation
          </button>

          <button className="bg-white px-6 py-3 rounded-full font-semibold">
            View Pricing
          </button>
        </div>

        {/* subtle decorative shape */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full translate-x-10 -translate-y-10"></div>
      </section>

    </main>
  );
}

export default ServicesPage;