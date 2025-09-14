import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can we see results?',
      answer: 'Most customers see initial insights within 30 days and measurable improvements in retention and internal mobility within 90 days.'
    },
    {
      question: 'Does Synera integrate with our existing HR systems?',
      answer: 'Yes, Synera integrates with 50+ popular HRIS, LMS, and performance management systems including Workday, BambooHR, and Cornerstone OnDemand.'
    },
    {
      question: 'What size companies work best with Synera?',
      answer: 'Synera is designed for companies with 100+ employees. Our sweet spot is organizations with 500-10,000 employees who want to improve internal talent mobility.'
    },
    {
      question: 'How secure is our employee data?',
      answer: 'We maintain SOC 2 Type II compliance, use enterprise-grade encryption, and follow strict data privacy protocols. Your data never leaves your region.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Clear answers to common questions about Synera
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#2c2c2c]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#2a6d67]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;