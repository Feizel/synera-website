import React from 'react';
import { GitBranch, Network, Users, BarChart3, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'Intelligent Career Pathways',
      description: 'AI-powered recommendations map personalized career journeys based on skills, interests, and organizational opportunities.',
      benefits: ['Reduce time-to-promotion by 40%', 'Increase internal mobility by 60%'],
      color: 'bg-[#2a6d67]',
    },
    {
      icon: Network,
      title: 'Dynamic Skills Mapping',
      description: 'Visualize organizational skills with interactive graphs that identify gaps, adjacencies, and development opportunities.',
      benefits: ['Real-time skills intelligence', 'Predictive capability planning'],
      color: 'bg-[#00cc66]',
    },
    {
      icon: Users,
      title: 'Internal Talent Marketplace',
      description: 'Match employees to projects, roles, mentorships, and rotations using intelligent algorithms and preferences.',
      benefits: ['Fill roles 3x faster', 'Improve cultural fit by 85%'],
      color: 'bg-[#2a6d67]',
    },
    {
      icon: BarChart3,
      title: 'Actionable HR Analytics',
      description: 'Track talent mobility KPIs with real-time dashboards showing retention, progression, and skill development metrics.',
      benefits: ['Measure training ROI', 'Predict attrition risk'],
      color: 'bg-[#00cc66]',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
            Intelligent Career Development Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to unlock internal talent potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2c2c2c] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-[#00cc66]" />
                        <span className="text-sm font-medium text-[#2c2c2c]">{benefit}</span>
                      </div>
                    ))}
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

export default FeaturesSection;