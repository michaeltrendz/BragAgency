import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-dark-900 to-black dark:from-black dark:via-dark-900 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We Create
              <span className="block bg-gradient-to-r from-primary-500 to-green-400 bg-clip-text text-transparent">
                Digital Magic
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your business with cutting-edge design and development. 
              We craft exceptional digital experiences that engage, convert, and inspire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group bg-primary-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Our Work
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 mt-12 lg:mt-0">
            <div className="relative">
              <div className="w-96 h-96 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-green-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-white/20 to-white/10 rounded-full backdrop-blur-sm border border-white/20"></div>
                <div className="absolute inset-16 bg-gradient-to-r from-primary-500 to-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;