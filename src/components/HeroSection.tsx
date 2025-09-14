import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Star, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-[#2c2c2c] leading-tight">
              Reduce Turnover by{' '}
              <span className="text-[#2a6d67]">25%</span> with AI-Powered Talent Mobility
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Transform your workforce with intelligent career pathways that keep top talent engaged and fill 60% of roles internally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="bg-[#2a6d67] text-white px-10 py-5 rounded-lg hover:bg-[#235a55] transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2 group shadow-lg"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <button className="border-2 border-[#2a6d67] text-[#2a6d67] px-10 py-5 rounded-lg hover:bg-[#2a6d67] hover:text-white transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#00cc66]" />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#00cc66]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#00cc66]" />
                <span>Setup in 30 minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-500">synera.com/dashboard</div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-[#2c2c2c]">Career Pathway Recommendations</span>
                    <span className="text-[#00cc66] font-bold">↗ 95% Match</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[#2a6d67] rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded border text-center">
                    <div className="text-2xl font-bold text-[#2a6d67]">25%</div>
                    <div className="text-xs text-gray-600">Turnover Reduction</div>
                  </div>
                  <div className="bg-white p-3 rounded border text-center">
                    <div className="text-2xl font-bold text-[#00cc66]">60%</div>
                    <div className="text-xs text-gray-600">Internal Fills</div>
                  </div>
                  <div className="bg-white p-3 rounded border text-center">
                    <div className="text-2xl font-bold text-[#2a6d67]">3x</div>
                    <div className="text-xs text-gray-600">Faster Hiring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;