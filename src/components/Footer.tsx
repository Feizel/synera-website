import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ExternalLink, Shield, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-[#2a6d67] rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-[#2c2c2c]">Synera</span>
                <div className="text-xs text-gray-500">by Atomus Dev</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              AI-powered internal talent mobility platform designed for South African enterprises. 
              Transform your workforce with intelligent career pathways and skills development.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Globe className="w-4 h-4" />
              <span>Proudly South African</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/features" className="hover:text-[#2a6d67] transition-colors">Features</Link></li>
              <li><Link to="/solutions" className="hover:text-[#2a6d67] transition-colors">AI Engine</Link></li>
              <li><Link to="/pricing" className="hover:text-[#2a6d67] transition-colors">Analytics</Link></li>
              <li><a href="#" className="hover:text-[#2a6d67] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[#2a6d67] transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/resources" className="hover:text-[#2a6d67] transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-[#2a6d67] transition-colors">Contact Support</Link></li>
              <li><a href="#" className="hover:text-[#2a6d67] transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-[#2a6d67] transition-colors">System Status</a></li>
              <li>
                <a 
                  href="https://atomusdev.co.za/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#2a6d67] transition-colors flex items-center space-x-1"
                >
                  <span>Atomus Dev</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-[#2a6d67] transition-colors flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </a>
              <a href="#" className="hover:text-[#2a6d67] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#2a6d67] transition-colors">Security</a>
              <a href="#" className="hover:text-[#2a6d67] transition-colors">Compliance</a>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 Atomus Dev (Pty) Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;