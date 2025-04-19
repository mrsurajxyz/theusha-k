import React, { useState, useEffect } from 'react';
import { Stamp, Menu, X } from 'lucide-react';
import { navItems } from '../constants/data';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Stamp 
              size={32} 
              className={`mr-2 ${isScrolled ? 'text-amber-600' : 'text-amber-500'}`} 
            />
            <div>
              <h1 className={`font-serif text-lg md:text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Usha Hallmarking
              </h1>
              <p className={`text-xs md:text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Authenticity in Every Mark
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className={`hidden md:block px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
              isScrolled
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-white text-amber-600 hover:bg-gray-100'
            }`}
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X 
                size={24} 
                className={isScrolled ? 'text-gray-800' : 'text-white'} 
              />
            ) : (
              <Menu 
                size={24} 
                className={isScrolled ? 'text-gray-800' : 'text-white'} 
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 right-0">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block text-gray-700 hover:text-amber-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="block w-full text-center bg-amber-600 text-white py-3 rounded-full hover:bg-amber-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;