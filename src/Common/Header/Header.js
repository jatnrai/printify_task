import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="bg-white border-b shadow-md sticky top-0 z-50 " >
      <nav className="container mx-auto flex justify-between items-center p-4 max-w-6xl">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" alt="Logo" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {["Catalog", "How it works", "Pricing", "Blog", "Services", "Use-cases", "Need help?"].map((item, index) => (
            <li key={index} className="relative group">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
              >
                <span>{item}</span>
                {/* Show arrow for dropdown items */}
                {["Services", "Use-cases", "Need help?"].includes(item) && (
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                )}
              </button>

              {/* Dropdown Menu */}
              {["Services", "Use-cases", "Need help?"].includes(item) && (
                <div
                  className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                    activeDropdown === index ? "block opacity-100" : "hidden"
                  }`}
                >
                  <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Dropdown 1
                  </a>
                  <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Dropdown 2
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Login / Signup Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Log in
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex items-center">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-35 z-40 transition-transform  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 bg-white h-full p-6">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mb-6">Menu</h2>
          <ul className="space-y-4">
            {["Catalog", "How it works", "Pricing", "Blog", "Services", "Use-cases", "Need help?"].map((item, index) => (
              <li key={index} className="text-gray-700 text-lg">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex justify-between w-half items-center"
                >
                  {item}
                  {/* Arrow for dropdown items */}
                  {["Services", "Use-cases", "Need help?"].includes(item) && (
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  )}
                </button>

                {/* Mobile Dropdown */}
                {["Services", "Use-cases", "Need help?"].includes(item) && activeDropdown === index && (
                  <div className="ml-6 mt-2 space-y-2">
                    <a href="/" className="block text-gray-600 hover:text-gray-900">
                      Dropdown 1
                    </a>
                    <a href="/" className="block text-gray-600 hover:text-gray-900">
                      Dropdown 2
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button className="block w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
              Log in
            </button>
            <button className="block w-full px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;