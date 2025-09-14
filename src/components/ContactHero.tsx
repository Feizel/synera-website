import React from 'react';
import { MessageCircle, Users, Clock } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f9f4ec] via-white to-[#f9f4ec]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-[#2a6d67] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-[#2c2c2c] mb-6">
          Get in Touch
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Ready to transform your talent development? Our team is here to help with 
          any questions about Synera's capabilities, pricing, or implementation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00cc66] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#2c2c2c] mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">Talk directly with our talent mobility specialists</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#2a6d67] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#2c2c2c] mb-2">Quick Response</h3>
            <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00cc66] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-sm">24/7</span>
            </div>
            <h3 className="font-semibold text-[#2c2c2c] mb-2">Always Available</h3>
            <p className="text-gray-600 text-sm">Multiple ways to reach us when you need support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;