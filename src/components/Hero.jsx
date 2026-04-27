const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrMc-I3uouAKMPk89ny-hnNoFkJCY7DyJlpWeozq0U_DA8bGprBrcUUiLLUsrr0Tyv4xRz2TDl2xhWC9xeHu48sXow5cJg5PM2tFQpZHnjvpGxtTRTJm5F4_ep56LYGQosm3O5shpo6GTvsrfoS3OUkcy3NQL335fzCmqURsqDAICRCG8r18RVwpVUuDj7X7cH3r3o2EPXw7yy21kMGXzNg42mBHLBYuir4345XU_xBlt-0dgPi8j0Z3eJik-s133CDR5L3kAPOWzc"
          className="w-full h-full object-cover"
        />

        {/* 🔥 STRONG LEFT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbe2] via-[#fbfbe2]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-8">

          {/* 👇 LEFT COLUMN CONTROL */}
          <div className="max-w-2xl space-y-6">

            <span className="inline-block px-4 py-1 rounded-full bg-[#d4af37]/20 text-[#735c00] text-sm uppercase tracking-widest font-semibold">
              The Future of Leasing
            </span>

            <h1 className="text-7xl md:text-8xl font-serif font-bold leading-tight tracking-tight text-black">
              Move In. <br />
              <span className="italic text-[#735c00]">Done.</span>
            </h1>

            <p className="text-lg text-gray-700 max-w-lg">
              Simplified property management and customization for the modern entrepreneur.
              We don't just lease space; we curate your success.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <button className="bg-gradient-to-r from-[#735c00] to-[#d4af37] text-white px-8 py-4 rounded-full font-semibold">
                Explore Services
              </button>

              <button className="flex items-center gap-2 text-black font-medium">
                View Portfolio
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;