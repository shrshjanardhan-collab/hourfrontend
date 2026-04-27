import PropertyCard from "./PropertyCard";

const properties = [
  {
    title: "The Alabaster Suites",
    location: "Green Valley Mall Area",
    price: "$2,800/mo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF4MX313B_HW9NlLv5YDhE1t38iSJKp-wbFa8wRFCPT5wtX2AGEn7SZNPWOGOX7PkfjgmJcAxTHFdqJFXvtHx5vhnvrZ8dSWj-OFi-Ow8eVDmxLFUipQW2z0_7tDxuB_0lApcZVV4-QAXu1GEA4TrQJUdGmMCZvkGz62Vk7esC1FJYRthfMa7qLVfeoRxlfsE9kAXrU67nxB5B4rhSA4whOxjN-KhbMFPMWzRovLwwbQ2KmT5bvcIgNvJFIdcPqNI6or1A4f1fOhOu",
    description:
      "Minimalist architecture meets organic warmth. Features private terrace, integrated smart systems, and floor-to-ceiling vistas.",
  },
  {
    title: "Amber Heights",
    location: "Sunset District",
    price: "$4,200/mo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJyxHNg_BkGUdI86sk_xX_LlnToqlcDvQkT6Li4A9QNuWLILhEB43y-SZ4c3_XSMazAVe5yermiHIPxDc-EqjWM1ulkjzAqRa8eG-tOXjxXxTHMj5N2Ip5Q0UOSv6vw-APT30-8vH-PzRvfG5f4Nm-JWSiML6H0cxZr8M5BjHE0f-GuELo7QfVRQegYwsGFRT3v9BYwP-NBlP8Q2ELo_9IOJ-C-UmZumh5QaatmQh1dbXF9uCZf5bSrkTEFj3G7na_bh9HJN9IXuHy",
    description:
      "A penthouse experience redefining luxury. Double-height ceilings and artisanal finishes.",
  },
    {
    title: "Amber Heights",
    location: "Sunset District",
    price: "$4,200/mo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJyxHNg_BkGUdI86sk_xX_LlnToqlcDvQkT6Li4A9QNuWLILhEB43y-SZ4c3_XSMazAVe5yermiHIPxDc-EqjWM1ulkjzAqRa8eG-tOXjxXxTHMj5N2Ip5Q0UOSv6vw-APT30-8vH-PzRvfG5f4Nm-JWSiML6H0cxZr8M5BjHE0f-GuELo7QfVRQegYwsGFRT3v9BYwP-NBlP8Q2ELo_9IOJ-C-UmZumh5QaatmQh1dbXF9uCZf5bSrkTEFj3G7na_bh9HJN9IXuHy",
    description:
      "A penthouse experience redefining luxury. Double-height ceilings and artisanal finishes.",
  },
    {
    title: "Amber Heights",
    location: "Sunset District",
    price: "$4,200/mo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJyxHNg_BkGUdI86sk_xX_LlnToqlcDvQkT6Li4A9QNuWLILhEB43y-SZ4c3_XSMazAVe5yermiHIPxDc-EqjWM1ulkjzAqRa8eG-tOXjxXxTHMj5N2Ip5Q0UOSv6vw-APT30-8vH-PzRvfG5f4Nm-JWSiML6H0cxZr8M5BjHE0f-GuELo7QfVRQegYwsGFRT3v9BYwP-NBlP8Q2ELo_9IOJ-C-UmZumh5QaatmQh1dbXF9uCZf5bSrkTEFj3G7na_bh9HJN9IXuHy",
    description:
      "A penthouse experience redefining luxury. Double-height ceilings and artisanal finishes.",
  },
    {
    title: "Amber Heights",
    location: "Sunset District",
    price: "$4,200/mo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJyxHNg_BkGUdI86sk_xX_LlnToqlcDvQkT6Li4A9QNuWLILhEB43y-SZ4c3_XSMazAVe5yermiHIPxDc-EqjWM1ulkjzAqRa8eG-tOXjxXxTHMj5N2Ip5Q0UOSv6vw-APT30-8vH-PzRvfG5f4Nm-JWSiML6H0cxZr8M5BjHE0f-GuELo7QfVRQegYwsGFRT3v9BYwP-NBlP8Q2ELo_9IOJ-C-UmZumh5QaatmQh1dbXF9uCZf5bSrkTEFj3G7na_bh9HJN9IXuHy",
    description:
      "A penthouse experience redefining luxury. Double-height ceilings and artisanal finishes.",
  },
    {
    title: "Amber Heights",
    location: "Sunset District",
    price: "$4,200/mo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJyxHNg_BkGUdI86sk_xX_LlnToqlcDvQkT6Li4A9QNuWLILhEB43y-SZ4c3_XSMazAVe5yermiHIPxDc-EqjWM1ulkjzAqRa8eG-tOXjxXxTHMj5N2Ip5Q0UOSv6vw-APT30-8vH-PzRvfG5f4Nm-JWSiML6H0cxZr8M5BjHE0f-GuELo7QfVRQegYwsGFRT3v9BYwP-NBlP8Q2ELo_9IOJ-C-UmZumh5QaatmQh1dbXF9uCZf5bSrkTEFj3G7na_bh9HJN9IXuHy",
    description:
      "A penthouse experience redefining luxury. Double-height ceilings and artisanal finishes.",
  },
  
  // add remaining 4 same way
];

function RentSection() {
  return (
    <main className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
      
      {/* Hero */}
      <header className="mb-16">
        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-on-surface mb-4">
          Discover Your Next{" "}
          <span className="italic text-primary">Sanctuary</span>
        </h1>
        <p className="text-secondary text-lg max-w-2xl leading-relaxed">
          Curating premium living spaces where architectural elegance meets the soft glow of home.
        </p>
      </header>

      {/* Filters */}
      <section className="bg-surface-container-low rounded-xl p-8 mb-16 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          
          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="font-label text-xs font-bold uppercase tracking-widest text-outline">
              Location
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-primary">
                location_on
              </span>
              <input
                className="w-full bg-surface-container-lowest py-4 pl-12 pr-4 rounded-lg focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline-variant"
                placeholder="e.g. Green Valley Mall"
              />
            </div>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="font-label text-xs font-bold uppercase tracking-widest text-outline">
                Price Range
              </label>
              <span className="text-sm font-semibold text-primary">
                $1,200 - $8,500
              </span>
            </div>
            <div className="py-5">
              <input
                type="range"
                min="1000"
                max="10000"
                defaultValue="4500"
                className="w-full h-1.5 bg-surface-variant rounded-full cursor-pointer accent-primary"
              />
            </div>
          </div>

          {/* Button */}
          <div>
            <button className="w-full bg-surface-container-highest text-on-surface py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all duration-300">
              Refine Search
            </button>
          </div>

        </div>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {properties.map((item, i) => (
          <PropertyCard key={i} {...item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <span className="font-label font-bold text-on-surface">
          01 <span className="text-outline mx-2">/</span> 08
        </span>

        <button className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-primary hover:text-white transition">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

    </main>
  );
}

export default RentSection;