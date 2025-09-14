import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    employeeCount: '',
    phone: '',
    challenges: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    '30-minute personalized walkthrough',
    'See your use case in action',
    'ROI calculation for your organization', 
    'Implementation timeline discussion'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold text-[#2c2c2c] mb-6">
              Request Your Personalized Demo
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors duration-200"
                    placeholder="Enter your work email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors duration-200"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors duration-200"
                    placeholder="Enter your job title"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees *
                  </label>
                  <select
                    name="employeeCount"
                    required
                    value={formData.employeeCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors duration-200"
                  >
                    <option value="">Select company size</option>
                    <option value="100-500">100-500</option>
                    <option value="500-1000">500-1000</option>
                    <option value="1000-5000">1000-5000</option>
                    <option value="5000+">5000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Talent Challenges
                </label>
                <textarea
                  name="challenges"
                  rows={4}
                  value={formData.challenges}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors duration-200"
                  placeholder="Tell us about your main talent mobility or retention challenges..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2a6d67] text-white px-8 py-4 rounded-lg hover:bg-[#235a55] transition-all duration-200 font-semibold flex items-center justify-center space-x-2 group"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2c2c2c] mb-6">
                What to Expect in Your Demo
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00cc66] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f9f4ec] p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-[#2c2c2c] mb-2">
                "Best demo experience I've had"
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                "The team understood our challenges immediately and showed exactly how Synera would solve them. Implementation was seamless."
              </p>
              <p className="text-sm text-gray-600 font-medium">
                Jennifer Walsh, Director of People Operations
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-[#2c2c2c] mb-3">
                Questions? We're here to help
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Our demo specialists are available Monday-Friday, 9am-6pm PT
              </p>
              <p className="text-[#2a6d67] font-medium text-sm">
                📞 +1 (555) 123-SYNC | 📧 demo@synera.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;