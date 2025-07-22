import React, { useState } from "react";
import { motion } from "framer-motion";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const members = [
    {
      name: "Abhishrestha Tyagi",
      role: "Frontend Developer",
      image: "/creator-profile.png.png", // Ensure correct path
      description: "Expert in React, Tailwind, and UI/UX design.",
    },
    {
      name: "Kartik Tyagi",
      role: "Backend Developer",
      image: "/kartik.png",
      description: "Specialist in Node.js, Express, and MongoDB.",
    },
    {
      name: "Abhinav Tyagi",
      role: "Cyber Security Analyst",
      image: "/abhinav.jpg",
      description: "Penetration tester and ethical hacker with strong security background.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="relative group flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              {activeIndex === index && (
                <motion.div
                  className="absolute top-28 w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm p-4 rounded-lg shadow-xl z-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {member.description}
                </motion.div>
              )}
              <motion.h4
                className="text-xl font-semibold text-gray-900 dark:text-white"
                whileHover={{ scale: 1.05, color: "#EC4899" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {member.name}
              </motion.h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
