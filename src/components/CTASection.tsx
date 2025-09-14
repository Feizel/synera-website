import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const features = [
    '30-day free trial',
    'No credit card required', 
    'Cancel anytime'
  ];

  return (
    <section className="py-24 bg-[#2a6d67]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 500+ companies reducing turnover and improving talent retention with Synera
          </p>
          
          <div className="mb-8">
            <Link
              to="/demo"
              className="bg-white text-[#2a6d67] px-12 py-5 rounded-lg hover:bg-gray-100 transition-all duration-200 font-bold text-lg inline-flex items-center space-x-2 group shadow-lg"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90 text-sm">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#00cc66]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;