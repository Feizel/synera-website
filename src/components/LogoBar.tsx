import React from 'react';

const LogoBar = () => {
  const companies = [
    { name: 'TechCorp', employees: '10K+' },
    { name: 'Global Manufacturing', employees: '25K+' },
    { name: 'Financial Services Inc', employees: '15K+' },
    { name: 'Innovation Labs', employees: '5K+' },
    { name: 'Enterprise Solutions', employees: '20K+' }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium text-sm">
            Trusted by 500+ companies worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="font-semibold text-[#2c2c2c] text-sm">
                {company.name}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {company.employees} employees
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;