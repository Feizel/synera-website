import React from 'react';
import { Play, Users } from 'lucide-react';

const DemoHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f9f4ec] via-white to-[#f9f4ec]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-[#2a6d67] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Play className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-[#2c2c2c] mb-6">
          See Synera in Action
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Book a personalized demo to see how Synera can transform your internal talent mobility. 
          Our experts will show you exactly how our AI-powered platform works with your specific use cases.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00cc66] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#2c2c2c] mb-2">Personalized Walkthrough</h3>
            <p className="text-gray-600 text-sm">30-minute customized demo focused on your challenges</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#2a6d67] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">ROI</span>
            </div>
            <h3 className="font-semibold text-[#2c2c2c] mb-2">ROI Calculation</h3>
            <p className="text-gray-600 text-sm">See projected savings and implementation timeline</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00cc66] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">Q&A</span>
            </div>
            <h3 className="font-semibold text-[#2c2c2c] mb-2">Expert Consultation</h3>
            <p className="text-gray-600 text-sm">Get answers to your specific talent mobility questions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHero;