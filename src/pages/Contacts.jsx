import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formsubmit.co/ajax/tabhi2096@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success === 'true') {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error submitting the form.');
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info Section */}
          <motion.div
            className="space-y-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Get in Touch</h3>
              <p className="mt-2">
                I’m open to freelance, internship, or full-time opportunities. Feel free to reach out via the form or using the contact info below.
              </p>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MdLocationOn className="text-blue-600 dark:text-blue-400 text-xl" />
                Roorkee, Uttarakhand, India
              </p>
              <p className="flex items-center gap-2">
                <MdPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                +91 70378 70311
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-blue-600 dark:text-blue-400 text-xl" />
                <a href="mailto:tabhi2096@gmail.com" className="underline">tabhi2096@gmail.com</a>
              </p>
            </div>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com/in/abhishrestha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/abhishrestha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:underline text-xl"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* Right Form Section */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-green-600 dark:text-green-400 mt-2">{status}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
  