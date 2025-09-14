import React from 'react';
import { Upload, Brain, Target, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Connect Your Data',
      description: 'Integrate with your existing HRIS, LMS, and performance systems in minutes.',
      step: '01'
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our AI analyzes skills, performance, and career preferences to map opportunities.',
      step: '02'
    },
    {
      icon: Target,
      title: 'Smart Matching',
      description: 'Employees get personalized career pathways and role recommendations.',
      step: '03'
    },
    {
      icon: TrendingUp,
      title: 'Track Results',
      description: 'Monitor retention, internal mobility, and ROI with real-time dashboards.',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get up and running in 30 minutes with our simple 4-step process
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-200 transform -translate-x-1/2 z-0"></div>
              )}
              <div className="relative z-10">
                <div className="w-24 h-24 bg-[#2a6d67] rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#00cc66] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;