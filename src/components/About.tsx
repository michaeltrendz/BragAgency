import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Users, number: '150+', label: 'Happy Clients' },
  { icon: Award, number: '200+', label: 'Projects Completed' },
  { icon: Clock, number: '5+', label: 'Years Experience' },
  { icon: Heart, number: '99%', label: 'Client Satisfaction' }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    name: 'David Kim',
    role: 'Project Manager',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About BragAgency
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of designers, developers, and strategists dedicated to creating 
            exceptional digital experiences that drive real business results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex p-4 bg-gradient-to-r from-primary-500 to-green-400 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Meet Our Team
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;