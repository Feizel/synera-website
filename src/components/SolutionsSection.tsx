import React from 'react';
import { UserCheck, GraduationCap, Target, TrendingUp, Clock, Users } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: UserCheck,
      persona: 'HR Directors',
      challenge: 'High turnover and expensive external hiring',
      solution: 'Reduce recruitment costs by 50% through internal talent development',
      outcome: '25% improvement in retention rates',
      savings: 'R2.5M annually in recruitment savings',
      metrics: [
        { label: 'Retention Increase', value: '25%', icon: TrendingUp },
        { label: 'Cost Reduction', value: 'R2.5M', icon: Users },
      ]
    },
    {
      icon: GraduationCap,
      persona: 'L&D Managers',
      challenge: 'Generic training with unclear career connection',
      solution: 'Personalized learning paths aligned with career progression',
      outcome: '40% increase in training completion rates',
      savings: 'R850K saved on unused training licenses',
      metrics: [
        { label: 'Completion Rate', value: '40%', icon: TrendingUp },
        { label: 'License Savings', value: 'R850K', icon: Users },
      ]
    },
    {
      icon: Target,
      persona: 'Talent Acquisition',
      challenge: 'Long hiring cycles and cultural fit issues',
      solution: 'Internal-first hiring with pre-validated cultural alignment',
      outcome: '60% faster time-to-fill for critical roles',
      savings: 'R1.8M reduction in agency fees',
      metrics: [
        { label: 'Time-to-Fill', value: '60%', icon: Clock },
        { label: 'Agency Savings', value: 'R1.8M', icon: Users },
      ]
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
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
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#2a6d67] rounded-lg flex items-center justify-center mr-4">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2c2c2c]">
                    {solution.persona}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{solution.challenge}</p>
                  </div>

                  <div className="border-l-4 border-[#2a6d67] pl-4">
                    <h4 className="font-semibold text-[#2a6d67] mb-2">Synera Solution</h4>
                    <p className="text-gray-700 text-sm">{solution.solution}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {solution.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <metric.icon className="w-4 h-4 text-[#2a6d67] mr-1" />
                            <span className="text-lg font-bold text-[#2a6d67]">{metric.value}</span>
                          </div>
                          <p className="text-xs text-gray-600">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-sm font-medium text-gray-800">{solution.savings}</p>
                    </div>
                  </div>
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