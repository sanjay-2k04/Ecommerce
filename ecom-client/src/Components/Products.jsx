import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/NATURE.png";

function Products() {
  // Extended product data
  const products = [
    {
      id: 1,
      name: "Modern Desk Lamp",
      description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
      image: img
    },
    {
      id: 2,
      name: "Wireless Headphones",
      description: "Premium noise-cancelling headphones with 30-hour battery life and comfortable fit.",
      image: img
    },
    {
      id: 3,
      name: "Smart Watch",
      description: "Fitness tracker with heart rate monitoring, sleep analysis, and smartphone notifications.",
      image: img
    },
    {
      id: 4,
      name: "Portable Bluetooth Speaker",
      description: "Waterproof speaker with 360° sound and 12 hours of battery life.",
      image: img
    },
    {
      id: 5,
      name: "Digital Camera",
      description: "20MP camera with 4K video recording and advanced autofocus technology.",
      image: img
    },
    {
      id: 6,
      name: "Coffee Maker",
      description: "Programmable coffee maker with built-in grinder and thermal carafe.",
      image: img
    },
    {
      id: 7,
      name: "Ergonomic Office Chair",
      description: "Adjustable chair with lumbar support and breathable mesh back.",
      image: img
    },
    {
      id: 8,
      name: "Wireless Earbuds",
      description: "True wireless earbuds with noise isolation and touch controls.",
      image: img
    },
    {
      id: 9,
      name: "Smart Home Hub",
      description: "Central control for all your smart home devices with voice assistant.",
      image: img
    },
    {
      id: 10,
      name: "Air Purifier",
      description: "HEPA filter purifier for rooms up to 500 sq ft with air quality monitor.",
      image: img
    },
    {
      id: 11,
      name: "Fitness Tracker",
      description: "Waterproof activity tracker with heart rate monitoring and sleep tracking.",
      image: img
    },
    {
      id: 12,
      name: "Mechanical Keyboard",
      description: "Customizable RGB backlit mechanical keyboard with tactile switches.",
      image: img
    },
    {
      id: 13,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI and programmable buttons.",
      image: img
    },
    {
      id: 14,
      name: "External SSD",
      description: "1TB portable solid state drive with USB-C connectivity and durable design.",
      image: img
    },
    {
      id: 15,
      name: "Smart Thermostat",
      description: "Energy-saving thermostat that learns your preferences and schedule.",
      image: img
    }
  ];

  return (
    <>
      {/* Products Section */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Select your category</h1>
          
          {/* Filter and Sort Controls - Optional */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                  <Link to={`/product/${product.id}`}>
                    <button className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition duration-200">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;