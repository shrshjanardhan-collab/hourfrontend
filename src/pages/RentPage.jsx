import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import RentSection from "../components/RentSection";

const properties = [
  {
    title: "The Alabaster Suites",
    location: "Green Valley Mall Area",
    price: "$2,800/mo",
    description:
      "Minimalist architecture meets organic warmth. Features private terrace and smart systems.",
    contact: "+91 9876543210",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDF4MX313B_HW9NlLv5YDhE1t38iSJKp-wbFa8wRFCPT5wtX2AGEn7SZNPWOGOX7PkfjgmJcAxTHFdqJFXvtHx5vhnvrZ8dSWj-OFi-Ow8eVDmxLFUipQW2z0_7tDxuB_0lApcZVV4-QAXu1GEA4TrQJUdGmMCZvkGz62Vk7esC1FJYRthfMa7qLVfeoRxlfsE9kAXrU67nxB5B4rhSA4whOxjN-KhbMFPMWzRovLwwbQ2KmT5bvcIgNvJFIdcPqNI6or1A4f1fOhOu",
  },
  {
    title: "Amber Heights",
    location: "Sunset District",
    price: "$4,200/mo",
    description:
      "Penthouse experience redefining luxury with double-height ceilings.",
    contact: "+91 9123456780",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJyxHNg_BkGUdI86sk_xX_LlnToqlcDvQkT6Li4A9QNuWLILhEB43y-SZ4c3_XSMazAVe5yermiHIPxDc-EqjWM1ulkjzAqRa8eG-tOXjxXxTHMj5N2Ip5Q0UOSv6vw-APT30-8vH-PzRvfG5f4Nm-JWSiML6H0cxZr8M5BjHE0f-GuELo7QfVRQegYwsGFRT3v9BYwP-NBlP8Q2ELo_9IOJ-C-UmZumh5QaatmQh1dbXF9uCZf5bSrkTEFj3G7na_bh9HJN9IXuHy",
  },
  
];

function RentPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
<RentSection />
   
      {/* Footer */}
      <Footer />
    </>
  );
}

export default RentPage;