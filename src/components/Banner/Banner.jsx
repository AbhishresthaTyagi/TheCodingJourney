import React from "react";
import BannerPng from "../../assets/education.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { motion } from "framer-motion";

// Features list
const features = [
  {
    icon: <FaBookReader className="text-3xl" />,
    text: "10,000+ Courses",
    delay: 0.2,
  },
  {
    icon: <GrUserExpert className="text-3xl" />,
    text: "Expert Instruction",
    delay: 0.4,
  },
  {
    icon: <MdOutlineAccessTime className="text-3xl" />,
    text: "Lifetime Access",
    delay: 0.6,
  },
];

// Animated Feature Button Component
const AnimatedFeatureButton = ({ icon, text, delay }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`flex items-center gap-4 w-full text-left p-5 rounded-xl shadow-md cursor-pointer select-none
        text-white
        bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-400
        bg-[length:400%_400%] bg-[position:0%_50%] relative overflow-hidden
      `}
      style={{
        backgroundSize: "400% 400%",
        animation: "gradientMove 10s ease infinite",
      }}
      whileHover={{
        scale: 1.07,
        boxShadow:
          "0 0 20px rgba(225, 0, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-3xl">{icon}</div>
      <span className="text-lg font-semibold">{text}</span>
    </motion.button>
  );
};

// Main Banner Component
const Banner = () => {
  return (
    <>
      {/* Global style for gradient animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      <section className="py-12 bg-white dark:bg-gray-950 transition-colors duration-500">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          {/* Image Section */}
          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={BannerPng}
            alt="Online Learning Platform Illustration"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: {
                type: "spring",
                stiffness: 250,
                damping: 6,
                mass: 0.7,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.2 },
            }}
          />

          {/* Text Content */}
          <div className="space-y-12 text-gray-900 dark:text-white">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold leading-tight"
            >
              The World's Leading{" "}
              <span className="text-sky-500 dark:text-sky-400">Online Learning</span> Platform
            </motion.h1>

            <div className="space-y-6">
              {features.map(({ icon, text, delay }) => (
                <AnimatedFeatureButton
                  key={text}
                  icon={icon}
                  text={text}
                  delay={delay}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
