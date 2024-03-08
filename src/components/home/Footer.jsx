import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-500 py-8 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <Link to="/">
              <h3 className="text-white font-semibold text-lg mb-2">Varun</h3>
            </Link>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
          <div className="md:w-1/4">
            <h3 className="text-white font-semibold text-lg mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h3 className="text-white font-semibold text-lg mb-2">Follow Us</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white text-sm text-center">© 2024 varun Footer. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
