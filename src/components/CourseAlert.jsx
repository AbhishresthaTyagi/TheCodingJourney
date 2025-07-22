import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const alertsQueue = [
  {
    id: 1,
    title: "New Course Dropped!",
    courseName: "ReactJS Bootcamp",
    description: "Learn ReactJS with real projects and get certified.",
    emoji: "📢",
    link: "/app/Courses",
  },
  {
    id: 2,
    title: "New Course Launched",
    courseName: "Cyber Security Essentials",
    description: "Master cybersecurity skills with hands-on training.",
    emoji: "🛡️",
    link: "/app/Courses",
  },
];

const CourseAlert = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setCurrentIndex(0); // Show the first alert after 10s
    }, 10000);

    return () => clearTimeout(initialTimer);
  }, []);

  // Automatically dismiss current alert after 6 seconds
  useEffect(() => {
    if (currentIndex === null) return;

    const autoDismiss = setTimeout(() => {
      setCurrentIndex((prev) =>
        prev < alertsQueue.length - 1 ? prev + 1 : null
      );
    }, 6000); // auto-dismiss after 6s

    return () => clearTimeout(autoDismiss);
  }, [currentIndex]);

  const handleManualDismiss = () => {
    setCurrentIndex((prev) =>
      prev < alertsQueue.length - 1 ? prev + 1 : null
    );
  };

  const currentAlert = alertsQueue[currentIndex];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {currentAlert && (
          <motion.div
            key={currentAlert.id}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-gray-200 shadow-xl rounded-lg p-4 w-[320px] text-sm font-poppins cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">{currentAlert.emoji}</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-1">
                  {currentAlert.title}
                </h3>
                <h4 className="text-blue-600 font-semibold">
                  {currentAlert.courseName}
                </h4>
                <p className="text-gray-600 text-xs mt-1">
                  {currentAlert.description}
                </p>
                <div className="mt-3 flex gap-2">
                  <a
                    href={currentAlert.link}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md text-xs hover:bg-yellow-600 transition"
                  >
                    Enroll
                  </a>
                  <button
                    onClick={handleManualDismiss}
                    className="text-gray-500 text-xs hover:text-red-500 transition"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CourseAlert;
