import React from 'react';
import { navItems } from '../constants/data';
import { Stamp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="md:flex md:justify-between mb-12">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <div className="flex items-center mb-4">
              <Stamp size={32} className="text-amber-500 mr-2" />
              <h2 className="text-xl font-bold">Usha Hallmarking</h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              BIS-certified hallmarking and HUID registration services for gold jewelry with unmatched precision and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-amber-500">
                <span className="text-sm">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-amber-500">
                <span className="text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-amber-500">
                <span className="text-sm">LI</span>
              </a>
            </div>
          </div>
          
          <div className="md:w-2/3 md:flex">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    Gold Hallmarking
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    HUID Registration
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    Quality Testing
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    Consultation Services
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  60A Nalini Seth Road, Sonapatty, Bara Bazar, Kolkata – 700007
                </li>
                <li>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@ushahallmarking.com" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    contact@ushahallmarking.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Usha Hallmarking & HUID Center. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="inline-block hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="inline-block hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;