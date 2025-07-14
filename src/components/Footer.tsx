import React from 'react';
import { Heart, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-green-400 bg-clip-text text-transparent mb-4">
              .bragAgency
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-6 max-w-md leading-relaxed">
              We're passionate about creating exceptional digital experiences that help businesses 
              thrive in the modern world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 dark:bg-dark-800 rounded-full hover:bg-primary-500 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 dark:bg-dark-800 rounded-full hover:bg-primary-500 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 dark:bg-dark-800 rounded-full hover:bg-primary-500 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 dark:bg-dark-800 rounded-full hover:bg-primary-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200">Web Development</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200">Our Team</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-300 text-sm">
            © 2025 .bragAgency. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-300 text-sm flex items-center mt-4 sm:mt-0">
            Made with <Heart className="h-4 w-4 text-primary-500 mx-1" /> by .bragAgency 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;