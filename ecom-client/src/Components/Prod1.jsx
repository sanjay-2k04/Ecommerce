import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import dal from "/run/media/sanjay/New Volume/Full Stack Projects/Ecommerce/ecom-client/src/assets/kadala_parupu.png";

function Products() {
  const navigate = useNavigate();

  // Extended product data to fill 3 rows x 3 columns
  const products = [
    {
      id: 1,
      name: "Modern Desk Lamp",
      description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
      // image: dal,
      price: 79.99
    },
    {
      id: 2,
      name: "Wireless Headphones",
      description: "Premium noise-cancelling headphones with 30-hour battery life and comfortable fit.",
      image: "/api/placeholder/300/300",
      price: 129.99
    },
    {
      id: 3,
      name: "Smart Watch",
      description: "Fitness tracker with heart rate monitoring, sleep analysis, and smartphone notifications.",
      image: "/api/placeholder/300/300",
      price: 199.99
    },
    {
      id: 4,
      name: "Portable Bluetooth Speaker",
      description: "Waterproof speaker with 360° sound and 20-hour playtime for outdoor adventures.",
      image: "/api/placeholder/300/300",
      price: 89.99
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      description: "RGB backlit gaming keyboard with customizable mechanical switches and macro keys.",
      image: "/api/placeholder/300/300",
      price: 149.99
    },
    {
      id: 6,
      name: "Ultrawide Monitor",
      description: "34-inch curved display with 1440p resolution and 144Hz refresh rate for immersive viewing.",
      image: "/api/placeholder/300/300",
      price: 399.99
    },
    {
      id: 7,
      name: "Ergonomic Office Chair",
      description: "Adjustable lumbar support and breathable mesh design for all-day comfort.",
      image: "/api/placeholder/300/300",
      price: 249.99
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      description: "Fast-charging Qi-compatible charging station with sleek minimalist design.",
      image: "/api/placeholder/300/300",
      price: 39.99
    },
    {
      id: 9,
      name: "Smart Home Hub",
      description: "Control all your smart devices with voice commands and automated routines.",
      image: "/api/placeholder/300/300",
      price: 119.99
    }
  ];

  const handleAddToCart = (product) => {
    // Get existing cart from localStorage
    const existingCart = localStorage.getItem("cart");
    let cartItems = existingCart ? JSON.parse(existingCart) : [];

    // Check if product already exists in cart
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Product exists, increase quantity
      cartItems[existingProductIndex].quantity += 1;
    } else {
      // Product doesn't exist, add it with quantity 1
      cartItems.push({
        ...product,
        quantity: 1
      });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Show notification
    alert(`Added ${product.name} to cart!`);
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    navigate("/cart", { replace: true });
  };

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
                  <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-teal-600 font-bold">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-teal-100 text-teal-600 px-3 py-1 rounded text-sm hover:bg-teal-200 transition duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="mt-2">
                    <button 
                      onClick={() => handleBuyNow(product)}
                      className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200"
                    >
                      Buy Now
                    </button>
                  </div>
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
