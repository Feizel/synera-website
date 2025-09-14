import React from 'react';
import { Check } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2c2c2c] mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your organization's talent development needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">Starter</h3>
            <p className="text-gray-600 mb-6">Perfect for growing teams</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#2c2c2c]">$29</span>
              <span className="text-gray-600">/employee/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>Basic career pathways</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>Skills assessment</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>Email support</span>
              </li>
            </ul>
            <button className="w-full bg-gray-100 text-[#2c2c2c] py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white p-8 rounded-2xl border-2 border-[#2a6d67] shadow-2xl relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#2a6d67] text-white px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">Professional</h3>
            <p className="text-gray-600 mb-6">For established organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#2c2c2c]">$59</span>
              <span className="text-gray-600">/employee/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>AI-powered recommendations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>Internal talent marketplace</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full bg-[#2a6d67] text-white py-4 rounded-lg hover:bg-[#235a55] transition-colors font-bold text-lg shadow-lg">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6">For large organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#2c2c2c]">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>Everything in Professional</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>Dedicated success manager</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#00cc66]" />
                <span>24/7 support</span>
              </li>
            </ul>
            <button className="w-full bg-gray-100 text-[#2c2c2c] py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;