import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@synera.com',
      subtitle: 'We respond within 24 hours',
      action: 'mailto:hello@synera.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-SYNC',
      subtitle: 'Mon-Fri, 9am-6pm PT',
      action: 'tel:+15551237962'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Innovation Drive',
      subtitle: 'Tech City, CA 94000',
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/synera',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/synerahq',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#2c2c2c] mb-6">
          Contact Information
        </h2>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#f9f4ec] rounded-lg flex items-center justify-center flex-shrink-0">
                <method.icon className="w-6 h-6 text-[#2a6d67]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2c2c2c] mb-1">{method.title}</h3>
                {method.action ? (
                  <a
                    href={method.action}
                    className="text-[#2a6d67] font-medium hover:underline"
                  >
                    {method.details}
                  </a>
                ) : (
                  <p className="text-[#2a6d67] font-medium">{method.details}</p>
                )}
                <p className="text-sm text-gray-600">{method.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f9f4ec] p-6 rounded-xl border border-gray-100">
        <h3 className="font-bold text-[#2c2c2c] mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-500 ${social.color} transition-colors duration-200 shadow-sm hover:shadow-md`}
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="font-semibold text-[#2c2c2c] mb-3">
          Need immediate help?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          For urgent technical issues or implementation questions, our support team is available during business hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/demo"
            className="bg-[#2a6d67] text-white px-4 py-2 rounded-lg hover:bg-[#235a55] transition-colors duration-200 font-medium text-center text-sm"
          >
            Schedule Demo
          </a>
          <a
            href="mailto:support@synera.com"
            className="border border-[#2a6d67] text-[#2a6d67] px-4 py-2 rounded-lg hover:bg-[#2a6d67] hover:text-white transition-colors duration-200 font-medium text-center text-sm"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;