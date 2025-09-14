import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Synera gave us visibility into our talent that we never had before. Internal mobility increased 3x in the first year.",
      author: "Michael Chen",
      role: "Chief People Officer",
      company: "TechCorp",
      rating: 5,
    },
    {
      quote: "The AI recommendations are incredibly accurate. Employees love seeing their career possibilities mapped out clearly.",
      author: "Lisa Rodriguez",
      role: "VP of Learning & Development",
      company: "Global Manufacturing Inc",
      rating: 5,
    },
    {
      quote: "ROI was immediate. We're saving $2M annually on external recruiting costs while improving employee satisfaction.",
      author: "David Park",
      role: "Head of Talent Acquisition",
      company: "Financial Services Leader",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
            Trusted by Talent Leaders
          </h2>
          <p className="text-xl text-gray-600">
            See what industry leaders are saying about Synera
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#2a6d67] mb-4" />
              
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00cc66] text-[#00cc66]" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#2a6d67] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[#2c2c2c]">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-[#2a6d67] font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;