import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const tabs = [
  { label: "About Website", id: "website" },
  { label: "Meet the Creator", id: "creator" },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("website");

  // Hook for animated button movement
  const createMotionButtonProps = () => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useSpring(1, { stiffness: 300, damping: 20 });

    const handleMouseMove = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;
      x.set(offsetX * 0.2);
      y.set(offsetY * 0.2);
      scale.set(1.05);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      scale.set(1);
    };

    return { ref, x, y, scale, handleMouseMove, handleMouseLeave };
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-20">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h2>

      {/* Animated Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab) => {
          const { ref, x, y, scale, handleMouseMove, handleMouseLeave } =
            createMotionButtonProps();

          return (
            <motion.button
              key={tab.id}
              ref={ref}
              onClick={() => setActiveTab(tab.id)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x, y, scale }}
              className={`px-5 py-2 font-semibold rounded-full transition-colors duration-300 
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                }`}
            >
              {tab.label}
            </motion.button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === "website" && (
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            Welcome to Coding Journey
          </h3>
          <p className="mb-4 leading-relaxed text-lg">
            <strong>Coding Journey</strong> is your gateway to mastering web
            development through a modern and practical approach.
          </p>
          <h4 className="text-xl font-semibold mb-3 mt-6">
            🚀 Courses Offered:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-base pl-2">
            <li>Frontend Development with HTML, CSS, JavaScript</li>
            <li>Modern ReactJS and Tailwind CSS Projects</li>
            <li>Portfolio & Resume Building for Developers</li>
            <li>Real-World Web App Projects (e.g., E-learning, Movie Apps)</li>
            <li>UI/UX Practices and Clean Code Guidelines</li>
          </ul>
        </motion.div>
      )}

      {activeTab === "creator" && (
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.img
              src="/creator-profile.png.png"
              alt="Abhishrestha Tyagi"
              className="rounded-full w-36 h-36 md:w-44 md:h-44 object-cover shadow-lg border-4 border-white dark:border-gray-700"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
            />
            <h3 className="text-2xl mt-4 font-bold text-gray-800 dark:text-white">
              Abhishrestha Tyagi
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Frontend Developer | ReactJS Enthusiast | UI/UX Explorer
            </p>
          </div>

          <div className="mt-6 text-base leading-relaxed space-y-4">
            <p>
              I’m a passionate Frontend Developer who enjoys building
              interactive and visually engaging web interfaces.
            </p>
            <p>
              Skilled in <strong>ReactJS, Tailwind CSS, JavaScript</strong>, I
              love transforming ideas into meaningful digital experiences.
            </p>
            <p>
              When I’m not coding, I explore new frameworks, design trends, and
              build open-source projects.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
            >
              <i className="fab fa-github text-xl"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhishrestha-tyagi-36a69b23b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
            >
              <i className="fab fa-linkedin text-xl"></i> LinkedIn
            </a>
            <a
              href="mailto:tabhi2096@gmail.com"
              className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
            >
              <i className="fas fa-envelope text-xl"></i> Email
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
