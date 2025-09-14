import React from 'react';
import { UserCheck, GraduationCap, Target } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: UserCheck,
      persona: 'HR Directors',
      challenge: 'High turnover and expensive external hiring',
      solution: 'Reduce recruitment costs by 50% through internal talent development',
      outcome: '25% improvement in retention rates',
      color: 'bg-[#2a6d67]',
    },
    {
      icon: GraduationCap,
      persona: 'L&D Managers',
      challenge: 'Generic training with unclear career connection',
      solution: 'Personalized learning paths aligned with career progression',
      outcome: '40% increase in training completion rates',
      color: 'bg-[#00cc66]',
    },
    {
      icon: Target,
      persona: 'Talent Acquisition',
      challenge: 'Long hiring cycles and cultural fit issues',
      solution: 'Internal-first hiring with pre-validated cultural alignment',
      outcome: '60% faster time-to-fill for critical roles',
      color: 'bg-[#2a6d67]',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-[#f9f4ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
            Solutions for Every Talent Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored approaches for different roles within your organization
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">
                  {solution.persona}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                  <p className="text-red-700 text-sm">{solution.challenge}</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Synera Solution</h4>
                  <p className="text-blue-700 text-sm">{solution.solution}</p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-[#00cc66]">
                  <h4 className="font-semibold text-green-800 mb-2">Result</h4>
                  <p className="text-green-700 text-sm font-medium">{solution.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;