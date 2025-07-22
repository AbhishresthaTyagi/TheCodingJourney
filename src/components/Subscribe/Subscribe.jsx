import React from "react";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={bgStyle}
        className="w-full h-full py-24 md:py-48 relative z-10"
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative z-10 flex flex-col justify-center items-center text-white"
        >
          <div className="text-center space-y-5 max-w-xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug">
              450K+ Students Are Learning From Us
            </h1>
            <p className="text-lg text-gray-200">
              Join our passionate learning community and upgrade your skills with expert-led guidance and practical experience.
            </p>

            <button
              className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Subscribe Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
