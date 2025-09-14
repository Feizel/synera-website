import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Users } from "lucide-react";

const handleAnchorClick = (href: string) => {
  if (href.startsWith("#")) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { text: "Features", href: "/features" },
    { text: "Solutions", href: "/solutions" },
    { text: "Pricing", href: "/pricing" },
    { text: "Resources", href: "/resources" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#2a6d67] rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#2c2c2c]">Synera</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.text}
                  onClick={() => handleAnchorClick(link.href)}
                  className="text-[#2c2c2c] hover:text-[#2a6d67] transition-colors duration-200 font-medium"
                >
                  {link.text}
                </button>
              ) : (
                <Link
                  key={link.text}
                  to={link.href}
                  className="text-[#2c2c2c] hover:text-[#2a6d67] transition-colors duration-200 font-medium"
                >
                  {link.text}
                </Link>
              )
            )}
            <Link
              to="/demo"
              className="bg-[#2a6d67] text-white px-6 py-2 rounded-lg hover:bg-[#235a55] transition-colors duration-200 font-medium"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2c2c2c] hover:text-[#2a6d67] transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <button
                    key={link.text}
                    onClick={() => {
                      handleAnchorClick(link.href);
                      setIsOpen(false);
                    }}
                    className="text-[#2c2c2c] hover:text-[#2a6d67] transition-colors duration-200 font-medium text-left"
                  >
                    {link.text}
                  </button>
                ) : (
                  <Link
                    key={link.text}
                    to={link.href}
                    className="text-[#2c2c2c] hover:text-[#2a6d67] transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                )
              )}
              <Link
                to="/demo"
                className="bg-[#2a6d67] text-white px-6 py-2 rounded-lg hover:bg-[#235a55] transition-colors duration-200 font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
