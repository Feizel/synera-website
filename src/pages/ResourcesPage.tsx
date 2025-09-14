import React from 'react';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      category: 'Guides',
      icon: BookOpen,
      items: [
        { title: 'Complete Guide to Internal Talent Mobility', type: 'PDF', description: 'Best practices for building internal career pathways' },
        { title: 'HR Analytics Playbook', type: 'PDF', description: 'Measure and optimize your talent development programs' },
        { title: 'Skills Mapping Framework', type: 'PDF', description: 'Step-by-step guide to organizational skills assessment' }
      ]
    },
    {
      category: 'Case Studies',
      icon: FileText,
      items: [
        { title: 'TechCorp: 3x Internal Mobility Increase', type: 'Case Study', description: 'How a Fortune 500 company transformed their talent strategy' },
        { title: 'Global Manufacturing: $2M Recruiting Savings', type: 'Case Study', description: 'Reducing external hiring costs through internal development' },
        { title: 'Financial Services: 25% Retention Improvement', type: 'Case Study', description: 'Building career pathways that retain top talent' }
      ]
    },
    {
      category: 'Webinars',
      icon: Video,
      items: [
        { title: 'The Future of Internal Talent Mobility', type: 'Webinar', description: 'Expert panel discussion on talent development trends' },
        { title: 'AI in HR: Practical Applications', type: 'Webinar', description: 'How AI is transforming talent management' },
        { title: 'Building a Skills-Based Organization', type: 'Webinar', description: 'Strategies for skills-first talent development' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2c2c2c] mb-4">
            Resources & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance, case studies, and best practices for talent development leaders
          </p>
        </div>

        <div className="space-y-12">
          {resources.map((category, index) => (
            <div key={index}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-[#2a6d67] rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#2c2c2c]">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <span className="bg-[#f9f4ec] text-[#2a6d67] px-3 py-1 rounded-full text-sm font-medium">
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

        {/* Newsletter Signup */}
        <div className="mt-20 bg-[#f9f4ec] p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights on talent development, internal mobility trends, and HR best practices delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a6d67]"
            />
            <button className="bg-[#2a6d67] text-white px-6 py-3 rounded-lg hover:bg-[#235a55] transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;