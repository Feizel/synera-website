import React from 'react';
import { BookOpen, FileText, Video, Download, Users, BarChart3, Award, Globe, Calendar, MessageSquare, Zap, Target } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      category: 'Implementation Guides',
      icon: BookOpen,
      items: [
        { title: 'Complete Guide to Internal Talent Mobility in SA', type: 'PDF', description: 'Best practices for South African enterprises with local compliance considerations', featured: true },
        { title: 'HR Analytics Playbook for African Markets', type: 'PDF', description: 'Measure and optimize talent programs with region-specific KPIs' },
        { title: 'Skills Mapping Framework', type: 'PDF', description: 'Step-by-step guide to organizational skills assessment and gap analysis' },
        { title: 'AI Implementation Roadmap', type: 'PDF', description: 'How to successfully deploy AI-powered talent mobility solutions' },
        { title: 'Change Management for Talent Transformation', type: 'PDF', description: 'Guide stakeholders through digital talent transformation' }
      ]
    },
    {
      category: 'South African Case Studies',
      icon: FileText,
      items: [
        { title: 'Standard Bank: R3.2M Recruitment Savings', type: 'Case Study', description: 'How SA\'s largest bank transformed internal mobility and reduced external hiring', featured: true },
        { title: 'Anglo American: 50% Faster Role Transitions', type: 'Case Study', description: 'Mining giant accelerates career progression with AI-powered pathways' },
        { title: 'Naspers: 35% Developer Retention Improvement', type: 'Case Study', description: 'Tech conglomerate builds internal talent marketplace for technical roles' },
        { title: 'Shoprite: Store Manager Development Success', type: 'Case Study', description: 'Retail leader develops 500+ store managers through internal mobility' },
        { title: 'Discovery: Insurance Innovation Through Talent', type: 'Case Study', description: 'How skills-based development drives digital transformation' }
      ]
    },
    {
      category: 'Expert Webinars & Events',
      icon: Video,
      items: [
        { title: 'The Future of Work in South Africa', type: 'Webinar', description: 'Expert panel on talent trends in the SA market with industry leaders' },
        { title: 'AI in HR: Practical Applications for SA Enterprises', type: 'Webinar', description: 'Real-world AI implementations in South African organizations' },
        { title: 'Building Skills-Based Organizations', type: 'Webinar', description: 'Strategies for transitioning to skills-first talent management' },
        { title: 'Compliance & Talent Mobility in SA', type: 'Webinar', description: 'Navigate employment equity and skills development regulations' }
      ]
    },
    {
      category: 'Tools & Templates',
      icon: Target,
      items: [
        { title: 'ROI Calculator for Talent Mobility', type: 'Tool', description: 'Calculate potential savings and business impact for your organization' },
        { title: 'Skills Assessment Template', type: 'Template', description: 'Ready-to-use framework for evaluating employee competencies' },
        { title: 'Career Pathway Mapping Toolkit', type: 'Template', description: 'Visual templates for designing career progression routes' },
        { title: 'Talent Mobility Metrics Dashboard', type: 'Template', description: 'Track key performance indicators for internal mobility programs' }
      ]
    }
  ];

  const featuredContent = [
    {
      title: '2024 South African Talent Mobility Report',
      description: 'Comprehensive analysis of talent trends, skills gaps, and mobility patterns across SA industries.',
      type: 'Research Report',
      icon: BarChart3,
      featured: true
    },
    {
      title: 'Skills Development Act Compliance Guide',
      description: 'Navigate SDA requirements while building effective internal talent mobility programs.',
      type: 'Compliance Guide',
      icon: Award,
      featured: true
    },
    {
      title: 'Employment Equity & Career Pathways',
      description: 'Create equitable advancement opportunities that support transformation goals.',
      type: 'Best Practice Guide',
      icon: Users,
      featured: true
    }
  ];

  const upcomingEvents = [
    {
      title: 'Talent Mobility Summit 2024',
      date: 'March 15, 2024',
      location: 'Sandton Convention Centre',
      type: 'Conference'
    },
    {
      title: 'AI in HR Masterclass',
      date: 'April 8, 2024',
      location: 'Virtual Event',
      type: 'Workshop'
    },
    {
      title: 'Skills-Based Hiring Workshop',
      date: 'May 12, 2024',
      location: 'Cape Town',
      type: 'Workshop'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2a6d67] to-[#235a55] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Expert guidance, case studies, and best practices for South African talent development leaders
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>South African focused content</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Industry expert insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Free downloadable resources</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular and impactful content for talent leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white border-2 border-[#2a6d67] rounded-lg p-8 shadow-lg">
                <div className="w-12 h-12 bg-[#2a6d67] rounded-lg flex items-center justify-center mb-6">
                  <content.icon className="w-6 h-6 text-white" />
                </div>
                <span className="bg-[#2a6d67] text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {content.type}
                </span>
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-3">{content.title}</h3>
                <p className="text-gray-600 mb-6">{content.description}</p>
                <button className="bg-[#2a6d67] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#235a55] transition-colors">
                  Download Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {resources.map((category, index) => (
              <div key={index}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-[#2a6d67] rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#2c2c2c]">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow ${
                      item.featured ? 'border-[#2a6d67] border-2' : 'border-gray-200'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.featured ? 'bg-[#2a6d67] text-white' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {item.type}
                        </span>
                        <Download className="w-5 h-5 text-gray-400 hover:text-[#2a6d67] cursor-pointer" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#2c2c2c] mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <button className="text-[#2a6d67] font-medium hover:text-[#235a55] transition-colors">
                        Download →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us at industry events and exclusive workshops
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-[#2a6d67] mr-2" />
                  <span className="text-sm font-medium text-[#2a6d67]">{event.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[#2c2c2c] mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.location}</p>
                <span className="bg-[#2a6d67] text-white px-3 py-1 rounded-full text-xs font-medium">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#2a6d67] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Ahead of Talent Trends
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive insights, case studies, and best practices delivered to your inbox monthly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#2a6d67] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 5,000+ HR leaders getting our monthly insights
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;