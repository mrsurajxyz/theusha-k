import React from 'react';
import { Award, Clock, Users, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-full h-96 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4386073/pexels-photo-4386073.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Hallmarking Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-amber-400 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Our Center
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            
            <p className="text-gray-600 mb-6">
              Usha Hallmarking & HUID Center is a BIS-certified service provider with a commitment to excellence. With years of experience in the industry, we have built a reputation for reliability, accuracy, and exceptional service.
            </p>
            
            <p className="text-gray-600 mb-8">
              Our state-of-the-art facility is equipped with the latest technology and staffed by experienced professionals who are dedicated to ensuring that your gold jewelry meets the highest standards of quality and authenticity.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Award size={20} className="text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">BIS Certified</h3>
                  <p className="text-sm text-gray-600">Official certification by Bureau of Indian Standards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Users size={20} className="text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Trusted by 500+</h3>
                  <p className="text-sm text-gray-600">Jewelers across Kolkata and beyond</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Clock size={20} className="text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Quick Turnaround</h3>
                  <p className="text-sm text-gray-600">Fast 24-48 hour processing times</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <MapPin size={20} className="text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Prime Location</h3>
                  <p className="text-sm text-gray-600">Conveniently located in Bara Bazar, Kolkata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;