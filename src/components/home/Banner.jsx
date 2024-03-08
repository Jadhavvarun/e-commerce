//Banner.jsx
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gray-500 h-[400px] flex items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-white mb-6">Discover amazing products and services</p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 mr-2 rounded-md bg-white text-gray-800 focus:outline-none"
          />
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
