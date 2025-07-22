import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

// Slide Left Animation
const SlideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { delay, duration: 0.5 } },
});

// Overlay animation variants
const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const ServicesData = [
  { id: 1, icon: "🎨", title: "Design", description: "We create elegant designs that work seamlessly across platforms.", delay: 0 },
  { id: 2, icon: "💻", title: "Development", description: "Robust and scalable development for all your needs.", delay: 0.1 },
  { id: 3, icon: "🚀", title: "Marketing", description: "Innovative marketing strategies that grow your business.", delay: 0.2 },
  { id: 4, icon: "📈", title: "Analytics", description: "Data-driven insights to optimize your outcomes.", delay: 0.3 },
  { id: 5, icon: "🔒", title: "Security", description: "Keeping your systems safe and secure.", delay: 0.4 },
  { id: 6, icon: "🤝", title: "Consulting", description: "Expert advice tailored to your goals.", delay: 0.5 },
];

// Magnetic Button Component
const MagneticButton = ({ children, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(x, [-30, 30], [1.05, 1.05]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.4);
    y.set(offsetY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x, y, scale }}
      className="px-5 py-2  bg-gradient-to-r from-purple-700 via-pink-600  font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-300"
    >
      {children}
    </motion.button>
  );
};

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const isAnyHovered = hoveredId !== null;

  const handleConnectClick = () => {
    alert("Thank you for reaching out! We will connect with you soon.");
  };

  return (
    <section className="bg-[#e2e7e9]">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-left pb-12 text-blue-800">
          Courses we provide?
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => {
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                variants={SlideLeft(service.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer border
                  bg-[#fffdfa]
                  border-[#f0eef1]
                  shadow-sm
                  transition-all duration-300
                  ${isHovered ? "scale-105 shadow-lg bg-[#e3dbcd] border-[#c2b8a3]" : ""}
                  ${isAnyHovered && !isHovered ? "opacity-70 scale-95" : "opacity-100 scale-100"}
                `}
              >
                {/* Base Content (Hidden when hovered) */}
                <div className={`flex flex-col items-center justify-center p-6 min-h-[180px] text-gray-800 transition-opacity duration-200 ${isHovered ? "opacity-0" : "opacity-100"}`}>
                  <div className="text-5xl mb-4 text-[#7a7058]">{service.icon}</div>
                  <h2 className="text-lg font-semibold text-center">{service.title}</h2>
                </div>

                {/* Hover Overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 bg-gray-800 text-white flex flex-col justify-center items-center p-6 text-center z-10"
                      variants={overlayVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <p className="text-sm mb-6 max-w-[280px]">{service.description}</p>
                      {service.id === 6 ? (
                        <MagneticButton onClick={handleConnectClick}>
                          Connect Us
                        </MagneticButton>
                      ) : (
                        <MagneticButton>
                          Enroll Now
                        </MagneticButton>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
