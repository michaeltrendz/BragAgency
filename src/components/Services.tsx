import React from 'react';
import { Palette, Code, Smartphone, Search, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that engage users and drive conversions.',
    color: 'from-primary-500 to-green-400'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies.',
    color: 'from-green-400 to-primary-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that delight users.',
    color: 'from-primary-500 to-green-300'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Get found online with our proven search engine optimization strategies.',
    color: 'from-green-300 to-primary-500'
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Comprehensive digital transformation and growth strategies.',
    color: 'from-primary-500 to-green-500'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast, optimized solutions for maximum impact.',
    color: 'from-green-500 to-primary-500'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-dark-700"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;