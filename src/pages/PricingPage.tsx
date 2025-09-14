import React from 'react';
import { Check, X, Users, Building2, Globe, Shield, Zap, BarChart3, Clock, DollarSign } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for growing teams (50-200 employees)',
      price: 'R285',
      period: '/employee/month',
      yearlyDiscount: '20% off yearly',
      features: [
        'Basic career pathways',
        'Skills profile management',
        'Internal opportunity board',
        'Basic analytics dashboard',
        'Email support',
        'CSV data import/export',
      ],
      limitations: [
        'No AI recommendations',
        'Limited integrations',
        'Basic reporting only',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For established organizations (200-1000 employees)',
      price: 'R485',
      period: '/employee/month',
      yearlyDiscount: '25% off yearly',
      features: [
        'Everything in Starter',
        'AI-powered career recommendations',
        'Advanced skills intelligence',
        'Internal talent marketplace',
        'Mentorship matching',
        'Learning path integration',
        'Advanced analytics & reporting',
        'Priority support',
        'HRIS integrations',
        'Custom workflows',
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations (1000+ employees)',
      price: 'Custom',
      period: 'pricing',
      yearlyDiscount: 'Volume discounts available',
      features: [
        'Everything in Professional',
        'Multi-tenant architecture',
        'Custom AI model training',
        'Advanced security & compliance',
        'Dedicated success manager',
        'Custom integrations & APIs',
        '24/7 premium support',
        'On-premise deployment option',
        'White-label capabilities',
        'Advanced audit & governance',
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const addOns = [
    {
      name: 'Advanced AI Engine',
      description: 'Enhanced ML models with custom training',
      price: 'R125/employee/month',
    },
    {
      name: 'Premium Integrations',
      description: 'Connect with 50+ HRIS, LMS, and productivity tools',
      price: 'R85/employee/month',
    },
    {
      name: 'Dedicated Success Manager',
      description: 'Personal account management and strategic guidance',
      price: 'R15,000/month',
    },
  ];

  const faqs = [
    {
      question: 'How is pricing calculated?',
      answer: 'Pricing is per active employee per month. Only employees who use the platform are counted towards your subscription.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 30-day free trial for all plans with full access to features. No credit card required.',
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.',
    },
    {
      question: 'Do you offer volume discounts?',
      answer: 'Yes, we offer significant discounts for organizations with 500+ employees. Contact our sales team for custom pricing.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2a6d67] to-[#235a55] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transparent Pricing for Every Organization
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Choose the plan that fits your talent development needs. All prices in South African Rand with no hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg border-2 shadow-lg relative ${
                plan.popular ? 'border-[#2a6d67] transform scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#2a6d67] text-white px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#2c2c2c] mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#2c2c2c]">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-sm text-[#2a6d67] font-medium">{plan.yearlyDiscount}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[#00cc66] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-[#2a6d67] text-white hover:bg-[#235a55]' 
                      : 'bg-gray-100 text-[#2c2c2c] hover:bg-gray-200'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Optional Add-ons
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your platform with additional capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-[#2c2c2c] mb-2">{addon.name}</h3>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <p className="text-xl font-bold text-[#2a6d67]">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#2c2c2c] mb-6">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            See how much you could save with Synera's talent mobility platform
          </p>
          <div className="bg-[#2a6d67] bg-opacity-5 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <BarChart3 className="w-8 h-8 text-[#2a6d67] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[#2a6d67]">R2.5M+</p>
                <p className="text-sm text-gray-600">Average annual savings</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-[#2a6d67] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[#2a6d67]">25%</p>
                <p className="text-sm text-gray-600">Reduction in turnover</p>
              </div>
              <div>
                <Clock className="w-8 h-8 text-[#2a6d67] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[#2a6d67]">60%</p>
                <p className="text-sm text-gray-600">Faster internal fills</p>
              </div>
            </div>
            <button className="mt-6 bg-[#2a6d67] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#235a55] transition-colors">
              Calculate Your Savings
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-[#2c2c2c] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;