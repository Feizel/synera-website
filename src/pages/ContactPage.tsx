import React, { useState } from 'react';
import { MessageCircle, Users, Clock, Mail, Phone, MapPin, Globe, Send, Calendar, Zap, Shield, ExternalLink } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    employeeCount: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@synera.co.za',
      subtitle: 'We respond within 4 business hours',
      action: 'mailto:hello@synera.co.za',
      primary: true
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+27 11 123 4567',
      subtitle: 'Mon-Fri, 8am-5pm SAST',
      action: 'tel:+27111234567',
      primary: false
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Sandton City Office Tower',
      subtitle: 'Johannesburg, Gauteng',
      action: null,
      primary: false
    }
  ];

  const offices = [
    {
      city: 'Johannesburg',
      address: 'Sandton City Office Tower, 5th Floor, Sandton, 2196',
      phone: '+27 11 123 4567',
      primary: true
    },
    {
      city: 'Cape Town',
      address: 'V&A Waterfront, Clock Tower Centre, Cape Town, 8001',
      phone: '+27 21 987 6543',
      primary: false
    },
    {
      city: 'Durban',
      address: 'Gateway Theatre of Shopping, Umhlanga, 4319',
      phone: '+27 31 456 7890',
      primary: false
    }
  ];

  const supportOptions = [
    {
      title: 'Sales Inquiry',
      description: 'Learn about pricing, features, and implementation',
      email: 'sales@synera.co.za',
      responseTime: '2 hours'
    },
    {
      title: 'Technical Support',
      description: 'Get help with platform usage and integrations',
      email: 'support@synera.co.za',
      responseTime: '4 hours'
    },
    {
      title: 'Partnership',
      description: 'Explore partnership and integration opportunities',
      email: 'partners@synera.co.za',
      responseTime: '24 hours'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2a6d67] to-[#235a55] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Ready to transform your talent development? Our South African team is here to help with 
            any questions about Synera's capabilities, pricing, or implementation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Local Expertise</h3>
              <p className="text-sm opacity-90">South African talent mobility specialists</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm opacity-90">Response within 4 business hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise Ready</h3>
              <p className="text-sm opacity-90">SOC2 compliant with local data residency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors"
                      placeholder="Your role"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors"
                      placeholder="your.email@company.co.za"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size *
                    </label>
                    <select
                      name="employeeCount"
                      required
                      value={formData.employeeCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors"
                    >
                      <option value="">Select size</option>
                      <option value="50-200">50-200 employees</option>
                      <option value="200-500">200-500 employees</option>
                      <option value="500-1000">500-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="asap">ASAP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2a6d67] focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-20 transition-colors"
                    placeholder="Tell us about your talent mobility challenges and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2a6d67] text-white px-8 py-4 rounded-lg hover:bg-[#235a55] transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Primary Contact Methods */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        method.primary ? 'bg-[#2a6d67]' : 'bg-gray-100'
                      }`}>
                        <method.icon className={`w-6 h-6 ${
                          method.primary ? 'text-white' : 'text-[#2a6d67]'
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2c2c2c] mb-1">{method.title}</h4>
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

              {/* Support Options */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-6">Specialized Support</h3>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-[#2c2c2c]">{option.title}</h4>
                        <span className="text-xs bg-[#2a6d67] text-white px-2 py-1 rounded">
                          {option.responseTime}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                      <a
                        href={`mailto:${option.email}`}
                        className="text-[#2a6d67] text-sm font-medium hover:underline"
                      >
                        {option.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#2a6d67] p-6 rounded-lg text-white">
                <h3 className="font-semibold mb-4">Need immediate help?</h3>
                <p className="text-sm mb-6 opacity-90">
                  For urgent technical issues or to schedule a demo, use our quick action buttons.
                </p>
                <div className="flex flex-col gap-3">
                  <button className="bg-white text-[#2a6d67] px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Demo</span>
                  </button>
                  <button className="border border-white text-white px-4 py-3 rounded-lg hover:bg-white hover:text-[#2a6d67] transition-colors font-semibold flex items-center justify-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Emergency Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Our South African Offices
            </h2>
            <p className="text-xl text-gray-600">
              Local presence across major business centers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${
                office.primary ? 'border-[#2a6d67] bg-[#2a6d67] bg-opacity-5' : 'border-gray-200 bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-[#2a6d67] mr-2" />
                  <h3 className="text-lg font-bold text-[#2c2c2c]">{office.city}</h3>
                  {office.primary && (
                    <span className="ml-2 bg-[#2a6d67] text-white text-xs px-2 py-1 rounded">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-3">{office.address}</p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, '')}`}
                  className="text-[#2a6d67] font-medium hover:underline"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;