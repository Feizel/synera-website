import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long is the demo?",
      answer: "Our personalized demos typically last 30 minutes, with time for your specific questions and use cases. We can extend the session if needed to ensure all your questions are answered."
    },
    {
      question: "What data do I need to prepare?", 
      answer: "No preparation needed! We'll walk through Synera using sample data relevant to your industry and company size. However, if you have specific scenarios you'd like to explore, feel free to share them during the demo."
    },
    {
      question: "Can I see my specific HR systems integration?",
      answer: "Yes, we can show how Synera integrates with your existing HRIS, LMS, and other talent management tools. We support 50+ integrations including Workday, BambooHR, SuccessFactors, and more."
    },
    {
      question: "Will I get pricing information?",
      answer: "Absolutely. We'll provide transparent pricing and ROI calculations based on your organization's size and needs. Most clients see positive ROI within 6 months of implementation."
    },
    {
      question: "What happens after the demo?",
      answer: "If Synera looks like a good fit, we can discuss next steps including a pilot program, implementation timeline, and technical requirements. There's no pressure - we want to ensure it's the right solution for your needs."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">Demo FAQ</h2>
          <p className="text-lg text-gray-600">
            Common questions about our demo process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-[#2c2c2c] pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#2a6d67] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#2a6d67] flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;