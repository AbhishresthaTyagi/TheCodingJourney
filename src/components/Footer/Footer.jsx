import React, { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp, FaYoutube, FaArrowUp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-100">
      {/* Main Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto grid md:grid-cols-2 gap-6 px-4 py-6"
      >
        {/* Left Column: Info */}
        <div className="space-y-4 max-w-xl">
          <h3 className="text-xl font-bold text-gray-900">The Coding Journey</h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            Empowering developers at all levels with tutorials, projects, and expert guidance.
            Join us to start your tech career with confidence.
          </p>
        </div>

        {/* Right Column: Newsletter */}
        <div className="space-y-3 max-w-xl">
          <h4 className="font-semibold text-base text-gray-900 mb-1">Subscribe to Newsletter</h4>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-l-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-r-lg px-4 text-sm"
              >
                Go
              </button>
            </div>
            <label className="text-xs flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-gray-600" />
              I agree to receive emails.
            </label>
          </form>
        </div>
      </motion.div>

      {/* Sub Footer: Social Icons */}
      <div className="bg-gray-800 text-gray-300 px-4 py-2 relative flex items-center justify-center text-sm">
        <div className="flex gap-4 text-lg">
          {[
            { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://web.whatsapp.com/" },
            { icon: <FaInstagram />, label: "Instagram", href: "#" },
            { icon: <TbWorldWww />, label: "Website", href: "#" },
            { icon: <FaYoutube />, label: "YouTube", href: "#" },
          ].map(({ icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#fff" }}
              className="transition hover:text-white"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
