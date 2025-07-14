import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce solution with advanced features and seamless user experience.',
    image: 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-primary-500 to-green-400'
  },
  {
    title: 'Banking Mobile App',
    category: 'Mobile Development',
    description: 'Secure and intuitive mobile banking application with biometric authentication.',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-green-400 to-primary-500'
  },
  {
    title: 'Brand Identity Design',
    category: 'Design',
    description: 'Complete brand identity package including logo, guidelines, and marketing materials.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-primary-500 to-green-300'
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Comprehensive analytics dashboard with real-time data visualization.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-green-300 to-primary-500'
  },
  {
    title: 'Restaurant App',
    category: 'Mobile Development',
    description: 'Food delivery app with real-time tracking and seamless payment integration.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-primary-500 to-green-500'
  },
  {
    title: 'Portfolio Website',
    category: 'Design',
    description: 'Creative portfolio showcasing artistic work with interactive galleries.',
    image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-green-500 to-primary-500'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover some of our latest projects and see how we bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                      <ExternalLink className="h-6 w-6 text-white" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                      <Github className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm font-semibold text-primary-500 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;