import React from 'react';
import { UserCheck, GraduationCap, Target, Building2, Users, TrendingUp, Clock, DollarSign, Award, Shield, Globe, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';

const SolutionsPage = () => {
  const coreSolutions = [
    {
      icon: UserCheck,
      persona: 'HR Directors',
      challenge: 'High turnover and expensive external hiring draining budgets',
      solution: 'AI-powered internal talent development and retention strategies',
      outcome: '25% improvement in retention rates',
      savings: 'R2.5M annually in recruitment savings',
      details: 'Transform your talent strategy with predictive analytics that identify flight risks early and recommend targeted interventions.',
      metrics: [
        { label: 'Retention Increase', value: '25%', icon: TrendingUp },
        { label: 'Cost Reduction', value: 'R2.5M', icon: DollarSign },
        { label: 'Time Saved', value: '60%', icon: Clock },
      ],
      features: ['Predictive attrition modeling', 'Automated career pathway generation', 'Internal mobility tracking', 'ROI dashboard']
    },
    {
      icon: GraduationCap,
      persona: 'L&D Managers',
      challenge: 'Generic training programs with unclear career connection and low completion rates',
      solution: 'Personalized learning paths aligned with career progression and business needs',
      outcome: '40% increase in training completion rates',
      savings: 'R850K saved on unused training licenses',
      details: 'Connect learning directly to career advancement with AI-curated content that adapts to individual goals and organizational priorities.',
      metrics: [
        { label: 'Completion Rate', value: '40%', icon: TrendingUp },
        { label: 'License Savings', value: 'R850K', icon: DollarSign },
        { label: 'Skill Development', value: '3x', icon: Award },
      ],
      features: ['AI-curated learning paths', 'Skills gap analysis', 'Progress tracking', 'ROI measurement']
    },
    {
      icon: Target,
      persona: 'Talent Acquisition',
      challenge: 'Long hiring cycles, cultural fit issues, and expensive agency fees',
      solution: 'Internal-first hiring with pre-validated cultural alignment and skills matching',
      outcome: '60% faster time-to-fill for critical roles',
      savings: 'R1.8M reduction in agency fees',
      details: 'Leverage your existing talent pool with intelligent matching that considers skills, culture, and career aspirations.',
      metrics: [
        { label: 'Time-to-Fill', value: '60%', icon: Clock },
        { label: 'Agency Savings', value: 'R1.8M', icon: DollarSign },
        { label: 'Cultural Fit', value: '85%', icon: Users },
      ],
      features: ['Internal talent marketplace', 'Cultural fit scoring', 'Skills-based matching', 'Automated sourcing']
    },
  ];

  const industrySolutions = [
    {
      industry: 'Financial Services',
      icon: Building2,
      challenges: ['Regulatory compliance requirements', 'High-stakes talent retention', 'Skills transformation for digital banking'],
      solutions: ['Compliance-aware career pathways', 'Risk-based talent planning', 'Digital skills development programs'],
      results: 'Standard Bank reduced compliance training time by 45% while improving retention in critical roles by 30%'
    },
    {
      industry: 'Mining & Resources',
      icon: Shield,
      challenges: ['Safety-critical role transitions', 'Remote workforce management', 'Skills shortage in specialized roles'],
      solutions: ['Safety-first career progression', 'Remote mentorship programs', 'Specialized skills development'],
      results: 'Anglo American improved safety role transitions by 50% and reduced specialized role vacancy time by 40%'
    },
    {
      industry: 'Technology',
      icon: TrendingUp,
      challenges: ['Rapid skill obsolescence', 'High developer turnover', 'Scaling technical teams'],
      solutions: ['Continuous learning pathways', 'Technical mentorship matching', 'Internal mobility acceleration'],
      results: 'Naspers increased developer retention by 35% and accelerated internal promotions by 60%'
    },
    {
      industry: 'Retail & FMCG',
      icon: Users,
      challenges: ['Seasonal workforce planning', 'Store manager development', 'Customer service excellence'],
      solutions: ['Flexible career pathways', 'Leadership development programs', 'Service skills enhancement'],
      results: 'Shoprite improved store manager readiness by 55% and reduced customer service training costs by 30%'
    },
  ];

  const useCases = [
    {
      title: 'Succession Planning',
      description: 'Identify and develop internal successors for critical roles',
      impact: '70% of leadership roles filled internally'
    },
    {
      title: 'Skills Transformation',
      description: 'Reskill workforce for digital transformation initiatives',
      impact: '80% successful role transitions'
    },
    {
      title: 'Diversity & Inclusion',
      description: 'Create equitable career pathways for underrepresented groups',
      impact: '45% improvement in diverse leadership'
    },
    {
      title: 'Merger Integration',
      description: 'Harmonize talent across merged organizations',
      impact: '60% faster integration timeline'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2a6d67] to-[#235a55] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Solutions for Every Talent Challenge
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Comprehensive talent mobility solutions designed for South African enterprises across all industries and organizational levels.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>R5.15M+ average annual savings</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Proven across 8+ industries</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>South African compliance ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Role-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored approaches for different stakeholders within your organization
            </p>
          </div>

          <div className="space-y-20">
            {coreSolutions.map((solution, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-start gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#2a6d67] rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2c2c2c]">{solution.persona}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Challenge</h4>
                      <p className="text-gray-600">{solution.challenge}</p>
                    </div>

                    <div className="border-l-4 border-[#2a6d67] pl-4">
                      <h4 className="font-semibold text-[#2a6d67] mb-2">Synera Solution</h4>
                      <p className="text-gray-700 mb-3">{solution.solution}</p>
                      <p className="text-sm text-gray-600">{solution.details}</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-4">Key Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <ArrowRight className="w-4 h-4 text-[#2a6d67]" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Results & Impact</h4>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {solution.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="flex items-center justify-center mb-2">
                            <metric.icon className="w-5 h-5 text-[#2a6d67] mr-1" />
                            <span className="text-2xl font-bold text-[#2a6d67]">{metric.value}</span>
                          </div>
                          <p className="text-xs text-gray-600">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-lg font-medium text-gray-800 mb-2">{solution.savings}</p>
                      <p className="text-sm text-gray-600">{solution.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Proven success across South Africa's key industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#2a6d67] rounded-lg flex items-center justify-center mr-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2c2c2c]">{industry.industry}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Common Challenges</h4>
                    <ul className="space-y-1">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#2a6d67] mb-2">Our Solutions</h4>
                    <ul className="space-y-1">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#00cc66] mt-0.5 mr-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[#2a6d67] bg-opacity-5 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#2a6d67] mb-2">Success Story</h4>
                    <p className="text-sm text-gray-700">{industry.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Strategic Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Transform your organization with proven talent mobility strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-[#2c2c2c] mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
                <div className="bg-[#2a6d67] bg-opacity-10 p-3 rounded">
                  <p className="text-sm font-medium text-[#2a6d67]">{useCase.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2a6d67] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Talent Strategy?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading South African enterprises using Synera to unlock their internal talent potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2a6d67] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2a6d67] transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;