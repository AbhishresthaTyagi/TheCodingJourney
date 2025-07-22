import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional icons, install lucide-react or replace with other icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", path: "/app/Dashboard" },
    { name: "About", path: "/app/About" },
    { name: "Contacts", path: "/app/ContactSection" },
    { name: "Courses", path: "/app/Courses" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
   <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold text-indigo-600">
          CodingJourney
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`relative text-lg font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-700 dark:text-gray-500"
                } hover:text-blue-600`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-4 bg-white dark:bg-gray-900">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-700 dark:text-gray-200"
                } hover:text-blue-600 transition`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
