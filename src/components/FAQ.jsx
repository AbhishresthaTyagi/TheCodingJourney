import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this platform beginner-friendly?",
      answer: "Yes! We start from basics and gradually cover advanced topics.",
    },
    {
      question: "Do I need to pay?",
      answer: "No. Most content is free. Premium features may be added later.",
    },
    {
      question: "Can I download resources?",
      answer: "Yes, downloadable project files and PDFs are provided.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 dark:border-gray-700 py-4"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left font-semibold text-gray-700 dark:text-white flex justify-between"
            >
              {faq.question}
              <span>{openIndex === index ? "–" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
