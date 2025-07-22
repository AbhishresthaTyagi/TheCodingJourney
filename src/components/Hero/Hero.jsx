import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const fallingLetter = {
  hidden: { y: -100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

const Hero = () => {
  const navigate = useNavigate();
  const heading = "Accelerate Your Learning with Expert-Led Courses";
  const [startAnimation] = useState(true); // Always true now since no video

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/public/heromain.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Hero Text */}
      <div className="z-10 text-center px-4 sm:px-6 text-white max-w-6xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight flex flex-wrap justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          {heading.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="mr-2 whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  variants={fallingLetter}
                  initial="hidden"
                  animate={startAnimation ? "visible" : "hidden"}
                  custom={wordIndex * 10 + charIndex}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </span>
          ))}
        </h1>

        <p className="mt-6 text-base sm:text-lg max-w-xl mx-auto text-gray-300">
          Join thousands of students mastering new skills and advancing their careers.
        </p>

        <motion.button
          onClick={() => navigate("/app/Courses")}
          className="mt-8 px-6 sm:px-10 py-3 rounded-full font-semibold text-white shadow-lg cursor-pointer select-none
            bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-400
            bg-[length:400%_400%] bg-[position:0%_50%] relative overflow-hidden"
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
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Explore Courses
        </motion.button>
      </div>

      {/* Gradient Animation Keyframes */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
