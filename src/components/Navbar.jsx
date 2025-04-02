import React, { useState } from "react";
import logo from "../assets/logo.svg";
import ChevronDown from "../assets/chevron-down.svg";
import vector from "../assets/Vector.svg";
import elite from "../assets/elite.svg";
import phone_icon from "../assets/phone-icon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <img src={logo} alt="Ambitio Logo" className="w-24 md:w-32" />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-[14px] lg:text-[15px] font-medium">
            <div className="flex items-center gap-x-4">
              {["Study-abroad", "Bootcamps", "Products"].map((item, index) => (
                <button
                  key={index}
                  className="flex items-center text-gray-700 hover:text-red-600 transition"
                >
                  {item}
                  <img
                    src={ChevronDown}
                    alt="Chevron Down"
                    className="h-4 w-4 ml-1"
                  />
                </button>
              ))}
              <a
                href="/pro"
                className="flex items-center text-gray-700 hover:text-red-600 transition"
              >
                <img src={vector} alt="Vector" className="h-4 w-4 mr-1" />{" "}
                Ambitio Pro
              </a>
              <a
                href="/elite"
                className="flex items-center text-gray-700 hover:text-red-600 transition"
              >
                <img src={elite} alt="Elite" className="h-4 w-4 mr-1" /> Ambitio
                Elite
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="/experts"
              className="flex items-center px-3 md:px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 text-xs md:text-sm whitespace-nowrap transition-all"
            >
              <img src={phone_icon} alt="Phone Icon" className="h-4 w-4 mr-2" />{" "}
              Speak with our Experts
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden bg-white shadow-lg rounded-lg absolute w-full left-0 transition-all duration-300 overflow-hidden flex flex-col items-center ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-1 p-4 w-full items-center">
            {["Study-abroad", "Bootcamps", "Products"].map((item, index) => (
              <button
                key={index}
                className="flex items-center justify-center text-gray-700 hover:text-red-600 transition px-4 py-2 w-full"
              >
                <span>{item}</span>
                <img
                  src={ChevronDown}
                  alt="Chevron Down"
                  className="h-4 w-4 ml-2"
                />
              </button>
            ))}
            <a
              href="/pro"
              className="flex items-center justify-center text-gray-700 hover:text-red-600 transition px-4 py-2 w-full"
            >
              <span>Ambitio Pro</span>
              <img src={vector} alt="Vector" className="h-4 w-4 ml-2" />
            </a>
            <a
              href="/elite"
              className="flex items-center justify-center text-gray-700 hover:text-red-600 transition px-4 py-2 w-full"
            >
              <span>Ambitio Elite</span>
              <img src={elite} alt="Elite" className="h-4 w-4 ml-2" />
            </a>
            <a
              href="/experts"
              className="flex items-center justify-center px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 text-sm transition-all w-half"
            >
              <img src={phone_icon} alt="Phone Icon" className="h-4 w-4 mr-2" />{" "}
              Speak with our Experts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
