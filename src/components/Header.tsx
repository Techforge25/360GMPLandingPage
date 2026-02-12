"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "#home", type: "scroll" },
  { name: "About", href: "#mission-vision", type: "scroll" },
  { name: "Platform", href: "#platform-overview", type: "scroll" },
  { name: "Opportunities", href: "#opportunities", type: "scroll" },
  { name: "Contact", href: "#contact", type: "scroll" },
  { name: "Login", href: "/login", type: "link" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      const headerOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center transform hover:scale-105 transition-transform duration-300"
              aria-label="Go to top"
            >
              <Image
                src="/images/fr-logo.png"
                alt="360 Global Marketplace"
                width={120}
                height={45}
                quality={100}
                priority
                className="h-auto w-auto"
                style={{
                  filter: "none",
                }}
              />
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.type === "scroll" ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                        isScrolled
                          ? "text-gray-700 hover:text-[#240457]"
                          : "text-gray-800 hover:text-[#240457]"
                      }`}
                    >
                      {link.name}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9747FF] to-[#7a3ff5] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                        isScrolled
                          ? "text-gray-700 hover:text-[#240457]"
                          : "text-gray-800 hover:text-[#240457]"
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollToSection("#contact")}
                className="group relative px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 overflow-hidden bg-white"
                style={{
                  border: "1px solid rgba(36, 4, 87, 0.15)",
                  boxShadow: "0 10px 24px rgba(36, 4, 87, 0.08)",
                }}
              >
                <span className="relative z-10 text-[#240457]">Join the Marketplace</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9747FF]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-gray-800 hover:bg-gray-100"
              }`}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Image
                src="/images/logo.png"
                alt="360 Global Marketplace"
                width={120}
                height={36}
                quality={100}
                className="h-auto w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Close navigation"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.type === "scroll" ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-purple-50 hover:text-[#240457] transition-colors"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="block w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-purple-50 hover:text-[#240457] transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full px-6 py-3 rounded-lg font-semibold text-white shadow-md transition-all duration-300 transform hover:scale-105"
                style={{ background: "linear-gradient(135deg, #7a3ff5 0%, #9747FF 100%)" }}
              >
                Join the Marketplace
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
