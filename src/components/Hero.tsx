import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeInElements = () => {
      const elements = heroRef.current?.querySelectorAll('.fade-in');
      elements?.forEach((el, index) => {
        setTimeout(() => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
        }, 200 * index);
      });
    };

    fadeInElements();
  }, []);

  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden"
    >
      {/* Overlay texture */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" style={{ 
        backgroundImage: `url('https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        filter: 'brightness(0.4)'
      }}></div>

      {/* Gold particles */}
      <div className="absolute inset-0 bg-amber-500 opacity-10 z-20"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 transform translate-y-10 transition-all duration-700 ease-out fade-in">
            Hallmark of <span className="text-amber-400">Excellence</span> and <span className="text-amber-400">Trust</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-300 fade-in">
            BIS-certified hallmarking and HUID registration services for gold jewelry with unmatched precision and reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-500 fade-in">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 bg-transparent border border-white hover:border-amber-400 text-white hover:text-amber-400 font-medium rounded-full transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
          
          <div className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-700 fade-in">
            <p className="text-sm text-gray-300 mb-2">
              BIS Recognized | Trusted by 500+ Jewelers
            </p>
            <div className="flex justify-center space-x-6 md:space-x-10">
              <div className="w-16 md:w-20 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                <span className="text-xs md:text-sm font-bold">BIS</span>
              </div>
              <div className="w-16 md:w-20 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                <span className="text-xs md:text-sm font-bold">HUID</span>
              </div>
              <div className="w-16 md:w-20 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                <span className="text-xs md:text-sm font-bold">ISO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-30"
        onClick={scrollToNext}
      >
        <ChevronDown size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;