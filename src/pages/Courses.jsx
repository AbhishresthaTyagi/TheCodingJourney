import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Star, X } from "lucide-react";

const courseData = [
  {
    title: "React Mastery",
    category: "React",
    description: "Master React fundamentals, hooks, and component design.",
    details: "Advanced React techniques with hooks and SPA architecture.",
    instructor: "John Doe",
    duration: "6 Weeks",
    price: "₹2999",
    rating: 4.8,
    reviews: 112,
    features: ["SPA Development", "Hooks Deep Dive", "Redux Basics"],
  },
  {
    title: "Tailwind Deep Dive",
    category: "CSS",
    description: "Design using Tailwind's utility classes.",
    details: "Modern layout building using Tailwind CSS.",
    instructor: "Jane Smith",
    duration: "4 Weeks",
    price: "₹1999",
    rating: 4.6,
    reviews: 85,
    features: ["Flexbox & Grid", "Dark Mode", "Component Styling"],
  },
  {
    title: "JavaScript Essentials",
    category: "JavaScript",
    description: "Get a solid grip on modern JavaScript.",
    details: "Learn ES6+, DOM, async/await, and scripting.",
    instructor: "Ankit Verma",
    duration: "5 Weeks",
    price: "₹2499",
    rating: 4.7,
    reviews: 95,
    features: ["ES6+", "DOM Manipulation", "Asynchronous JS"],
  },
  {
    title: "Responsive Design",
    category: "CSS",
    description: "Create fluid layouts for all devices.",
    details: "Master Flexbox, Grid, and mobile-first design.",
    instructor: "Priya Kumar",
    duration: "3 Weeks",
    price: "₹1499",
    rating: 4.5,
    reviews: 78,
    features: ["Media Queries", "Mobile-first Design", "Accessibility"],
  },
  {
    title: "Node.js Backend Basics",
    category: "JavaScript",
    description: "Build scalable backend applications with Node.js.",
    details: "Express.js, REST APIs, and database integration.",
    instructor: "Rahul Sharma",
    duration: "5 Weeks",
    price: "₹2799",
    rating: 4.7,
    reviews: 102,
    features: ["Express.js", "REST APIs", "MongoDB"],
  },
  {
    title: "TypeScript for Beginners",
    category: "JavaScript",
    description: "Add static typing to JavaScript with TypeScript.",
    details: "Types, interfaces, generics, and tooling.",
    instructor: "Simran Kaur",
    duration: "4 Weeks",
    price: "₹2299",
    rating: 4.6,
    reviews: 88,
    features: ["Static Typing", "Interfaces", "Tooling"],
  },
  {
    title: "Advanced CSS Animations",
    category: "CSS",
    description: "Create stunning animations with pure CSS.",
    details: "Keyframes, transitions, and performance optimizations.",
    instructor: "Neha Gupta",
    duration: "3 Weeks",
    price: "₹1799",
    rating: 4.5,
    reviews: 60,
    features: ["Keyframes", "Transitions", "Performance"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const categories = ["All", "React", "JavaScript", "CSS"];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredCourses = courseData.filter((c) => {
    const matchesCategory =
      selectedCategory === "All" || c.category === selectedCategory;
    const matchesSearch = c.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header with title and search in flex */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <motion.h2
            className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-4 sm:mb-0"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🚀 Explore Our Courses
          </motion.h2>
          -{/* Search bar */}
          <input
            type="text"
            placeholder="🔍 Search courses..."
            className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Tabs */}

        <div className="flex justify-center sm:justify-start mb-10 flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold border transition ${
                selectedCategory === cat
                  ? "bg-indigo-700 text-white border-indigo-700 shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-indigo-100 dark:hover:bg-indigo-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredCourses.length === 0 && (
            <p className="col-span-full text-center text-gray-600 dark:text-gray-400 italic">
              No courses found.
            </p>
          )}

          {filteredCourses.map((course, i) => (
            <motion.div
              variants={cardVariants}
              key={i}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition relative group cursor-pointer"
              onClick={() => setSelected(course)}
              title="Click to learn more"
            >
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{course.description}</p>

              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 space-y-0.5">
                <p>
                  <strong>Instructor:</strong> {course.instructor}
                </p>
                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p>
                  <strong>Price:</strong> {course.price}
                </p>
              </div>

              <div
                className="flex items-center gap-1 text-yellow-500 text-sm mb-3"
                aria-label={`Rating: ${course.rating} stars`}
              >
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 ${
                      course.rating >= idx + 1 ? "fill-yellow-400" : "stroke-yellow-400"
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  ({course.reviews} Reviews)
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-indigo-900/90 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-6 text-sm rounded-2xl text-center pointer-events-none group-hover:pointer-events-auto">
                <p className="mb-4">{course.details}</p>
                <ul className="list-disc list-inside text-left text-xs mb-4 space-y-1">
                  {course.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-400" /> {feat}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(course);
                  }}
                  className="bg-white text-indigo-800 font-semibold px-4 py-2 rounded hover:bg-gray-100"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              aria-modal="true"
              role="dialog"
              aria-labelledby="modal-title"
            >
              <motion.div
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl max-w-md w-full relative text-center"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-red-500"
                  aria-label="Close modal"
                >
                  <X />
                </button>

                <h3
                  className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-2"
                  id="modal-title"
                >
                  {selected.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <strong>Instructor:</strong> {selected.instructor}
                  <br />
                  <strong>Duration:</strong> {selected.duration}
                  <br />
                  <strong>Price:</strong> {selected.price}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{selected.details}</p>

                <button
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mb-2"
                  onClick={() =>
                    alert(`Redirecting to payment gateway for ${selected.title} (${selected.price})`)
                  }
                >
                  Pay & Enroll
                </button>

                <button
                  className="text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-white"
                  onClick={() => setSelected(null)}
                >
                  Cancel
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Courses;
