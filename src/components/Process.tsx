import React from 'react';
import { Package, FlaskConical, Stamp as Stamper, QrCode } from 'lucide-react';
import { processSteps } from '../constants/data';

const iconMap: Record<string, React.ReactNode> = {
  'package': <Package size={32} className="text-white" />,
  'flaskconical': <FlaskConical size={32} className="text-white" />,
  'stamper': <Stamper size={32} className="text-white" />,
  'qrcode': <QrCode size={32} className="text-white" />,
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Our Hallmarking Process
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We follow a rigorous process to ensure the highest standards of quality and accuracy in our hallmarking services.
          </p>
        </div>

        <div className="relative">
          {/* Process steps */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <h3 className="text-xl font-bold text-amber-400 mb-1">
                    Step {step.step}
                  </h3>
                  <h4 className="text-2xl font-semibold mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
                
                <div className="hidden md:flex w-16 h-16 rounded-full bg-amber-500 items-center justify-center absolute left-1/2 transform -translate-x-1/2 shadow-lg">
                  {iconMap[step.icon]}
                </div>
                
                <div className={`md:w-1/2 mt-4 md:mt-0 flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="md:hidden mr-4 w-12 h-12 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center">
                    {iconMap[step.icon]}
                  </div>
                  <div className={`bg-gray-800 rounded-lg p-6 md:max-w-md ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'}`}>
                    <div className="px-4 py-3 bg-gray-700 rounded border-l-4 border-amber-500">
                      <span className="block text-sm font-medium text-amber-300">Key Benefit</span>
                      <span className="block mt-1 text-white">
                        {index === 0 && "Convenient drop-off with clear documentation"}
                        {index === 1 && "High-precision testing for accurate purity assessment"}
                        {index === 2 && "Official BIS certification guarantees authenticity"}
                        {index === 3 && "Digital traceability ensures complete transparency"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;