import React, { useState } from "react";
import { motion } from "framer-motion";
import RotatingText from "./RotatingText";
import { FaUsers, FaGoogle, FaFacebookF } from "react-icons/fa";
import bgImage from "../../assets/bannerbg.jpg"; // ✅ Ensure this image exists

const Banner2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const Modal = ({ children, onClose }) => (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 p-8 rounded-lg max-w-md w-full text-white shadow-lg"
      >
        {children}
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-28 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Main Centered Content */}
      <div className="relative container mx-auto px-6 z-10 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide">
            Empower Your <span className="text-cyan-400">Learning Journey</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            Join a thriving community where you can learn, grow, and connect with passionate individuals.
            Access curated resources, peer support, and exciting opportunities for personal and professional development.
          </p>

          <motion.button
            onClick={() => {
              setModalOpen(true);
              setIsSignup(true);
              setSubmitted(false);
            }}
            className="inline-flex items-center justify-center space-x-3 px-10 py-3 rounded-full font-semibold text-white shadow-lg cursor-pointer bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-400"
            style={{ backgroundSize: "400% 400%", animation: "gradientMove 10s ease infinite" }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 20px rgba(225, 0, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaUsers className="text-white text-xl" />
            <RotatingText
              texts={["Sign-Up", "Sign-In", "Join-Us"]}
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.03}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              mainClassName="text-white"
              splitLevelClassName="overflow-hidden"
              rotationInterval={2500}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Auth Modal */}
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          {submitted ? (
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">🎉 Thank You for Joining Us!</h3>
              <p className="text-gray-200">We’re excited to have you in our community.</p>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-white text-gray-900 font-semibold px-6 py-2 rounded hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Tab Switcher */}
              <div className="flex justify-between mb-6">
                <button
                  onClick={() => {
                    setIsSignup(true);
                    setSubmitted(false);
                  }}
                  className={`flex-1 py-2 rounded-l-full font-semibold ${
                    isSignup ? "bg-cyan-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => {
                    setIsSignup(false);
                    setSubmitted(false);
                  }}
                  className={`flex-1 py-2 rounded-r-full font-semibold ${
                    !isSignup ? "bg-cyan-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  Login
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignup && (
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded font-semibold bg-cyan-500 hover:bg-cyan-600"
                >
                  {isSignup ? "Register" : "Login"}
                </button>
              </form>

              {/* Social Login */}
              <div className="mt-6 text-center space-y-3">
                <p className="text-gray-400">Or continue with</p>
                <div className="flex justify-center space-x-6">
                  <button
                    onClick={() => alert("Google login clicked")}
                    className="p-3 rounded-full bg-red-600 hover:bg-red-700 text-white"
                    aria-label="Login with Google"
                  >
                    <FaGoogle size={20} />
                  </button>
                  <button
                    onClick={() => alert("Facebook login clicked")}
                    className="p-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white"
                    aria-label="Login with Facebook"
                  >
                    <FaFacebookF size={20} />
                  </button>
                </div>
              </div>
            </>
          )}
        </Modal>
      )}
    </section>
  );
};

export default Banner2;
