import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/NATURE.png";
import turmeric from '../assets/grocery items/masala/turmeric masala.jpg'
import dal from '../assets/grocery items/dal/pasi dal.jpg'
import flour from '../assets/grocery items/flour/wheat flour.jpg'
import makeup from '../assets/grocery items/makeup/ponds powder.webp'
import oil from '../assets/grocery items/oil/sunflower oil.jpg'
import pulses from '../assets/grocery items/pulses/mookadalai white.jpg'
import rice from '../assets/grocery items/rice/briyani rice.jpg'
import shampoo from '../assets/grocery items/shampoo/clinic plus.jpg'
import snacks from '../assets/grocery items/snacks/lays.jpg'
import soap from '../assets/grocery items/soap/cinthol soap.jpg'

function Products() {
  // Extended product data
  const products = [
    {
      id: 1,
      name: "Dal",
      description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
      image: dal,
      price: 79.99
    },
    {
      id: 2,
      name: "Flour",
      description: "Premium noise-cancelling headphones with 30-hour battery life and comfortable fit.",
      image: flour,
      price: 129.99
    },
    {
      id: 3,
      name: "Makeup",
      description: "Fitness tracker with heart rate monitoring, sleep analysis, and smartphone notifications.",
      image: makeup,
      price: 199.99
    },
    {
      id: 4,
      name: "Masala",
      description: "Waterproof speaker with 360° sound and 20-hour playtime for outdoor adventures.",
      image: turmeric,
      price: 89.99
    },
    {
      id: 5,
      name: "Oil",
      description: "RGB backlit gaming keyboard with customizable mechanical switches and macro keys.",
      image: oil,
      price: 149.99
    },
    {
      id: 6,
      name: "Pulses",
      description: "34-inch curved display with 1440p resolution and 144Hz refresh rate for immersive viewing.",
      image: pulses,
      price: 399.99
    },
    {
      id: 7,
      name: "Rice",
      description: "Adjustable lumbar support and breathable mesh design for all-day comfort.",
      image: rice,
      price: 249.99
    },
    {
      id: 8,
      name: "Shampoo",
      description: "Fast-charging Qi-compatible charging station with sleek minimalist design.",
      image: shampoo,
      price: 39.99
    },
    {
      id: 9,
      name: "Snacks",
      description: "Control all your smart devices with voice commands and automated routines.",
      image: snacks,
      price: 119.99
    },
    {
      id: 10,
      name: "Soap",
      description: "Control all your smart devices with voice commands and automated routines.",
      image: soap,
      price: 119.99
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