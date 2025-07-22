import React from "react";
import "./cssFiles/testimonial.css"; // Custom scrolling/animation styles

const testimonials = [
  {
    text: "This platform helped me land an internship. The learning path is superb!",
    name: "Kartik Tyagi",
  },
  {
    text: "Created an animal activist website with the help of CodingJourney.",
    name: "Arjun Tyagi",
  },
  {
    text: "I learned full-stack skills and even built my own portfolio. Highly recommend!",
    name: "Ojasvi Pundir",
  },
  {
    text: "This platform helped me land an internship. The learning path is superb!",
    name: "Kartik Tyagi",
  },
  {
    text: "Clear videos and real-world projects made React easy for me.",
    name: "Vibha Chauhan",
  },
  {
    text: "I learned full-stack skills and even built my own portfolio. Highly recommend!",
    name: "Ashish Kumar",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-4 overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          What Our Learners Say
        </h2>

        <div className="scroll-container">
          <div className="scroll-track">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="testimonial-card bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 shadow p-6 rounded-xl transition-colors duration-300"
              >
                <p className="italic">"{t.text}"</p>
                <h4 className="mt-4 font-bold text-blue-600 dark:text-blue-400">
                  – {t.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
