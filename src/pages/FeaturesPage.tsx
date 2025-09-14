import React from 'react';
import { GitBranch, Network, Users, BarChart3, BookOpen, Award, Calendar, MessageSquare, Target, Zap, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const FeaturesPage = () => {
  const coreFeatures = [
    {
      icon: GitBranch,
      title: 'AI-Powered Career Pathways',
      description: 'Intelligent recommendations using skill similarity and transition probabilities to map personalized career journeys.',
      benefits: ['95% accuracy in role matching', 'Reduce time-to-promotion by 40%', 'Increase internal mobility by 60%'],
      details: 'Our hybrid AI engine combines Jaccard similarity with Markov-style transition priors to deliver explainable career recommendations.',
    },
    {
      icon: Network,
      title: 'Dynamic Skills Intelligence',
      description: 'Real-time skills mapping with gap analysis, adjacency detection, and predictive capability planning.',
      benefits: ['Live skills inventory', 'Automated gap detection', 'Predictive workforce planning'],
      details: 'Interactive skills graphs powered by Neo4j provide deep insights into organizational capabilities and development opportunities.',
    },
    {
      icon: Users,
      title: 'Internal Talent Marketplace',
      description: 'Intelligent matching for roles, projects, mentorships, and rotations with cultural fit validation.',
      benefits: ['Fill roles 3x faster', '85% cultural fit improvement', '60% internal fill rate'],
      details: 'Advanced algorithms match employees to opportunities based on skills, preferences, and organizational needs.',
    },
    {
      icon: BarChart3,
      title: 'Advanced HR Analytics',
      description: 'Comprehensive dashboards tracking mobility KPIs, retention metrics, and training ROI with predictive insights.',
      benefits: ['Real-time mobility tracking', 'Attrition risk prediction', 'Training ROI measurement'],
      details: 'Enterprise-grade analytics with customizable dashboards and automated reporting for strategic decision-making.',
    },
  ];

  const additionalFeatures = [
    {
      icon: BookOpen,
      title: 'Personalized Learning Paths',
      description: 'AI-curated learning recommendations aligned with career goals and skill gaps.',
    },
    {
      icon: Award,
      title: 'Skills Assessments',
      description: 'Validate competencies with AI-powered assessments and peer reviews.',
    },
    {
      icon: Calendar,
      title: 'Career Calendar',
      description: 'Schedule interviews, assessments, and development activities seamlessly.',
    },
    {
      icon: MessageSquare,
      title: 'Mentorship Matching',
      description: 'Connect employees with mentors based on career goals and expertise.',
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and monitor career objectives with milestone tracking and progress analytics.',
    },
    {
      icon: Zap,
      title: 'AI Career Assistant',
      description: 'Conversational AI providing instant career guidance and recommendations.',
    },
  ];

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC2 compliant with multi-tenant architecture, RBAC, and audit logging.',
    },
    {
      icon: Globe,
      title: 'Multi-tenant Platform',
      description: 'Secure organizational isolation with customizable workflows and branding.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2a6d67] to-[#235a55] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Complete Talent Mobility Platform
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Transform your workforce with AI-powered career development, skills intelligence, and internal talent marketplace - all designed for South African enterprises.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>25% reduction in turnover</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>60% internal fill rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>R2.5M+ annual savings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to unlock internal talent potential with enterprise-grade capabilities
            </p>
          </div>

          <div className="space-y-16">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#2a6d67] rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2c2c2c]">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-gray-700 mb-6">
                    {feature.details}
                  </p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <ArrowRight className="w-5 h-5 text-[#00cc66]" />
                        <span className="font-medium text-[#2c2c2c]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 p-8 rounded-xl border">
                    <div className="text-center text-gray-500">
                      <feature.icon className="w-24 h-24 mx-auto mb-4 opacity-20" />
                      <p>Interactive Demo Available</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Complete Feature Set
            </h2>
            <p className="text-xl text-gray-600">
              Additional capabilities to support every aspect of talent development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#2a6d67] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#2c2c2c] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Enterprise-Ready Platform
            </h2>
            <p className="text-xl text-gray-600">
              Built for South African enterprises with security, compliance, and scalability in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#2a6d67] rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2c2c2c]">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;