import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-teal-50 py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Store</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Discover our collection of high-quality products at affordable prices.</p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-200 font-medium">
            Shop Now
          </button>
        </div>
      </div>
      
      {/* Featured Products */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img src="/api/placeholder/300/300" alt="Product 1" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Modern Desk Lamp</h3>
                <p className="text-gray-500 text-sm mb-4">Adjustable LED desk lamp with multiple brightness settings and color temperatures.</p>
                <button className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition duration-200">
                  View Details
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img src="/api/placeholder/300/300" alt="Product 2" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Wireless Headphones</h3>
                <p className="text-gray-500 text-sm mb-4">Premium noise-cancelling headphones with 30-hour battery life and comfortable fit.</p>
                <button className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition duration-200">
                  View Details
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img src="/api/placeholder/300/300" alt="Product 3" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Smart Watch</h3>
                <p className="text-gray-500 text-sm mb-4">Fitness tracker with heart rate monitoring, sleep analysis, and smartphone notifications.</p>
                <button className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition duration-200">
                  View Details  
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;