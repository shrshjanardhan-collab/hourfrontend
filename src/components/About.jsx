export default function About() {
  return (
    <section id="about" className="py-32 bg-surface-container-low bg-[#f5f5dc]">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24 items-center">
        
        {/* Image */}
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAmUBtSaOnapqHry5IuDPJZoRpJRNOyOj15UxLSpaq98b6HJ6e3EQSuYFiYet-J0nK_MKn7-eVenB_DfGMnnf_u8UDK3F8y5qB4T86GOhPhtG-z1HkT3x73M0yWOlJ2F1IP85jD61kRB8JOJu7-gCCNjenR8NE8UUTlI4wX6Nj4nt59fa4UANQG1kqroWMiL7TUN3kJh56qGbFQkwJUt6JwljJ7zIOSptbnbIVTzhMESSxhXSXHIaEgIa0D1mq0ypELsQrFRk1RyzV"
            className="rounded-xl shadow-xl"
            alt=""
          />

          {/* Glass Card */}
          <div className="absolute -bottom-10 -right-10 backdrop-blur-xl bg-surface/70 p-8 rounded-lg hidden lg:block">
            <p className="italic text-primary font-headline">
              "Customization is not an upgrade; it's our standard."
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <h2 className="text-5xl font-headline">
            Tenant-Focused <br /> Precision
          </h2>

          <p className="text-secondary">
            We reimagine leasing with concierge-level customization.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-primary text-2xl font-headline">Premium Only</h4>
              <p className="text-sm text-on-surface-variant">
                Prime locations only.
              </p>
            </div>

            <div>
              <h4 className="text-primary text-2xl font-headline">Bespoke Layouts</h4>
              <p className="text-sm text-on-surface-variant">
                Fully customized spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}