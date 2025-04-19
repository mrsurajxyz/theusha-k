import React from 'react';
import { ShieldCheck, Fingerprint, FlaskConical, ClipboardCheck } from 'lucide-react';
import { services } from '../constants/data';

const iconMap: Record<string, React.ReactNode> = {
  'shield-check': <ShieldCheck size={40} className="text-amber-500" />,
  'fingerprint': <Fingerprint size={40} className="text-amber-500" />,
  'microscope': <FlaskConical size={40} className="text-amber-500" />,
  'clipboard-check': <ClipboardCheck size={40} className="text-amber-500" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Premium Services
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive hallmarking and HUID services to ensure your gold jewelry meets the highest standards of quality and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-amber-200"></div>
              
              <div className="relative z-10">
                <div className="mb-5">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;