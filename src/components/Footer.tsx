import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '/#features' },
        { text: 'Solutions', href: '/#solutions' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Security', href: '/security' }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Careers', href: '/careers' },
        { text: 'Press', href: '/press' },
        { text: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: '/docs' },
        { text: 'API Reference', href: '/api' },
        { text: 'Help Center', href: '/help' },
        { text: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms of Service', href: '/terms' },
        { text: 'Cookie Policy', href: '/cookies' }
      ]
    }
  ];

  return (
    <footer className="bg-[#2c2c2c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#2a6d67] rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Synera</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Empowering talent journeys worldwide through AI-powered career development and internal mobility.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/synera"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#2a6d67] transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/synerahq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#2a6d67] transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-[#00cc66] transition-colors duration-200 text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-12 pb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Get the latest insights on talent development and HR best practices
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a6d67]"
              />
              <button className="bg-[#2a6d67] text-white px-6 py-2 rounded-lg hover:bg-[#235a55] transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Synera. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Empowering talent journeys worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;