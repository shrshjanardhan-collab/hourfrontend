export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrMc-I3uouAKMPk89ny-hnNoFkJCY7DyJlpWeozq0U_DA8bGprBrcUUiLLUsrr0Tyv4xRz2TDl2xhWC9xeHu48sXow5cJg5PM2tFQpZHnjvpGxtTRTJm5F4_ep56LYGQosm3O5shpo6GTvsrfoS3OUkcy3NQL335fzCmqURsqDAICRCG8r18RVwpVUuDj7X7cH3r3o2EPXw7yy21kMGXzNg42mBHLBYuir4345XU_xBlt-0dgPi8j0Z3eJik-s133CDR5L3kAPOWzc"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="max-w-2xl space-y-8">
          <span className="px-4 py-1 rounded-full bg-primary-container/20 text-primary text-sm uppercase tracking-widest">
            The Future of Leasing
          </span>

          <h1 className="text-7xl font-headline leading-tight -tracking-tight">
            Move In. <br />
            <span className="italic text-primary">Done.</span>
          </h1>

          <p className="text-xl text-on-surface-variant leading-relaxed">
            Simplified property management and customization for the modern entrepreneur.
          </p>

          <div className="flex gap-6 pt-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-full">
              Explore Services
            </button>

            <button className="font-semibold text-on-surface hover:text-primary transition">
              ▶ View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}