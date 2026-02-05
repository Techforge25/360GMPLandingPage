"use client";

import { useState } from "react";
import type { FC } from "react";
import Image from "next/image";

// TypeScript interface for Props
interface NavbarProps {
  activeSection?: string;
}

const Navbar: FC<NavbarProps> = ({ activeSection = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 84; // Header height
    const rect = el.getBoundingClientRect();
    const offsetTop = window.scrollY + rect.top - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    // Close mobile menu
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const getNavLinkClass = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return [
      "relative inline-block text-md transition-colors duration-300 cursor-pointer",
      isActive
        ? "text-primary after:scale-x-100"
        : "text-[#22252B] hover:text-primary after:scale-x-0 hover:after:scale-x-100",
      "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full",
      "after:bg-primary after:origin-left after:transition-transform after:duration-300",
    ].join(" ");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="flex-shrink-0 flex items-center"
          >
            <Image
              src="/images/Logo.png"
              alt="3SIXTY Logo"
              width={100}
              height={30}
              className="h-auto w-auto"
              priority
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-12 ">
            <button
              onClick={() => scrollToSection("home")}
              className={getNavLinkClass("home")}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("marketplace")}
              className={getNavLinkClass("marketplace")}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("opportunities")}
              className={getNavLinkClass("opportunities")}
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={getNavLinkClass("how-it-works")}
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={getNavLinkClass("contact")}
            >
              Contact Us
            </button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-primary-accent transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 rounded-md text-xl font-medium transition-colors text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("marketplace")}
              className="block w-full text-left px-3 py-2 rounded-md text-xl font-medium transition-colors text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("opportunities")}
              className="block w-full text-left px-3 py-2 rounded-md text-xl font-medium transition-colors text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left px-3 py-2 rounded-md text-xl font-medium transition-colors text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 rounded-md text-xl font-medium transition-colors text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
