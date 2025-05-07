import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import kadala from '../assets/grocery items/dal/kadala dal.webp'
import pasi from '../assets/grocery items/dal/pasi dal.jpg'
import thuvaram from '../assets/grocery items/dal/thuvaram dal.webp'
import ulutham from '../assets/grocery items/dal/ulutham dal.jpg'
import kflour from '../assets/grocery items/flour/kadala flour.webp'
import maida from '../assets/grocery items/flour/maida flour.webp'
import rava from '../assets/grocery items/flour/rava.webp'
import wheat from '../assets/grocery items/flour/wheat flour.jpg'
import brush from '../assets/grocery items/makeup/brush.webp'
import colgate from '../assets/grocery items/makeup/colgate paste.jpg'
import parachute from '../assets/grocery items/makeup/parachute oil.webp'
import ponds from '../assets/grocery items/makeup/ponds powder.webp'
import chicken from '../assets/grocery items/masala/chicken masala.png'
import corriander from '../assets/grocery items/masala/coriander powder.jpg'
import curry from '../assets/grocery items/masala/curry masala.jpg'
import garam from '../assets/grocery items/masala/garam masala.jpg'
import mutton from '../assets/grocery items/masala/mutton masala.jpg'
import turmeric from '../assets/grocery items/masala/turmeric masala.jpg'
import ground from '../assets/grocery items/oil/groundnut oil.jpg'
import plam from '../assets/grocery items/oil/plam oil.jpg'
import sun from '../assets/grocery items/oil/sunflower oil.jpg'
import mookadalaib from '../assets/grocery items/pulses/mookadalai black.jpg'
import mookadalaiw from '../assets/grocery items/pulses/mookadalai white.jpg'
import pacha from '../assets/grocery items/pulses/pacha pairu.jpg'
import thatta from '../assets/grocery items/pulses/thatta pairu.jpg'
import briyani from '../assets/grocery items/rice/briyani rice.jpg'
import full from '../assets/grocery items/rice/full boil.jpg'
import half from '../assets/grocery items/rice/half Boiled.jpg'
import idli from '../assets/grocery items/rice/IdliRice.webp'
import chick from '../assets/grocery items/shampoo/chick.webp'
import clinic from '../assets/grocery items/shampoo/clinic plus.jpg'
import head from '../assets/grocery items/shampoo/head and sholders.jpg'
import meera from '../assets/grocery items/shampoo/meera.webp'
import sunsilk from '../assets/grocery items/shampoo/sunsilk.webp'
import frooti from '../assets/grocery items/snacks/frooti juice.webp'
import good from '../assets/grocery items/snacks/good day biscut.webp'
import lays from '../assets/grocery items/snacks/lays.jpg'
import peanut from '../assets/grocery items/snacks/peanut Burfi.webp'
import cinthol from '../assets/grocery items/soap/cinthol soap.jpg'
import hamam from '../assets/grocery items/soap/hamam soap.png'
import mysore from '../assets/grocery items/soap/mysore sandel soap.webp'
import rin from '../assets/grocery items/soap/rin soap.png'
import surfexel from '../assets/grocery items/soap/surfexel soap.png'

function Products() {
  const navigate = useNavigate();
  const productId = useParams()['id'];
  // console.log(productId);

  // Extended product data to fill 3 rows x 3 columns
  const products = {

      1:[{
      id: 1,
      name: "Kadala dal",
      description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
      image: kadala,
      price: 100.00
      },
      {
      id: 2,
      name: "Pasi dal",
      description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
      image: pasi,
      price: 100.00
      },
      {
        id: 3,
        name: "Thuvaram dal",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: thuvaram,
        price: 100.00
        },
      {
        id: 4,
        name: "Ulutham dal",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: ulutham,
        price: 100.00
        }
    ],
    2:[
      {
        id: 5,
        name: "Kadala flour",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: kflour,
        price: 100.00
        },
        {
        id: 6,
        name: "Maida flour",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: maida,
        price: 100.00
        },
        {
          id: 7,
          name: "Rava",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: rava,
          price: 100.00
          },
        {
          id: 8,
          name: "Wheat flour",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: wheat,
          price: 100.00
          }
    ],
    3:[
      {
        id: 9,
        name: "Brush",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: brush,
        price: 100.00
        },
        {
        id: 10,
        name: "Colgate paste",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: colgate,
        price: 100.00
        },
        {
          id: 11,
          name: "Parachute Oil",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: parachute,
          price: 100.00
          },
        {
          id: 12,
          name: "Ponds powder",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: ponds,
          price: 100.00
          }
    ],
    4:[
      {
        id: 13,
        name: "Chicken masala",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: chicken,
        price: 100.00
        },
        {
          id: 14,
          name: "Corriander powder",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: corriander,
          price: 100.00
          },
          {
            id: 15,
            name: "Curry Masala",
            description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
            image: curry,
            price: 100.00
            },
            {
              id: 16,
              name: "garam masala",
              description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
              image: garam,
              price: 100.00
              },
              {
                id: 17,
                name: "Mutton masala",
                description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
                image: mutton,
                price: 100.00
                },
                {
                  id: 18,
                  name: "Turmeric masala",
                  description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
                  image: turmeric,
                  price: 100.00
                  }
    ],
    5:[
      {
        id: 19,
        name: "Groundnut oil",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: ground,
        price: 100.00
        },
        {
          id: 20,
          name: "Palm oil",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: plam,
          price: 100.00
          },
          {
            id: 21,
            name: "Sunflower oil",
            description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
            image: sun,
            price: 100.00
            },
    ],
    6:[
      {
        id: 22,
        name: "Mookadalai Black",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: mookadalaib,
        price: 100.00
        },
        {
          id: 23,
          name: "Mokadalai white",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: mookadalaiw,
          price: 100.00
          },
          {
            id: 24,
            name: "Pachcha pairu",
            description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
            image: pacha,
            price: 100.00
            },
            {
              id: 25,
              name: "Thatta pairu",
              description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
              image: thatta,
              price: 100.00
              },
    ],
    7:[
      {
        id: 27,
        name: "Briyani rice",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: briyani,
        price: 100.00
        },
        {
          id: 28,
          name: "Full boil",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: full,
          price: 100.00
          },
          {
            id: 29,
            name: "Half boiled",
            description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
            image: half,
            price: 100.00
            },
            {
              id: 30,
              name: "Idli rice",
              description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
              image: idli,
              price: 100.00
              },
    ],
    8:[
      {
        id: 31,
        name: "Chick",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: chick,
        price: 100.00
        },
        {
          id: 32,
          name: "Clinic plus",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: clinic,
          price: 100.00
          },
          {
            id: 33,
            name: "Head and Shoulders",
            description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
            image: head,
            price: 100.00
            },
            {
              id: 34,
              name: "Meera",
              description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
              image: meera,
              price: 100.00
              },
              {
                id: 35,
                name: "Sunsilk",
                description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
                image: sunsilk,
                price: 100.00
                },
    ],
    9:[
      {
        id: 36,
        name: "Frooti juice",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: frooti,
        price: 100.00
        },
        {
          id: 37,
          name: "Good day biscuit",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: good,
          price: 100.00
          },
          {
            id: 38,
            name: "Lays",
            description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
            image: lays,
            price: 100.00
            },
            {
              id: 39,
              name: "Peanut Burfi",
              description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
              image: peanut,
              price: 100.00
              },
    ],
    10:[
      {
        id: 40,
        name: "Cinthol",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: cinthol,
        price: 100.00
        },
        {
          id: 41,
          name: "Hamam",
          description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
          image: hamam,
          price: 100.00
          },
          {
            id: 42,
            name: "Mysore sandel",
            description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
            image: mysore,
            price: 100.00
            },
            {
              id: 43,
              name: "Rin",
              description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
              image: rin,
              price: 100.00
              },
              {
                id: 44,
                name: "Surfexcel",
                description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
                image: surfexel,
                price: 100.00
                },
    ]
    }
    
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
            {(products[productId]).map(product => (
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




/*
const products = [
    {
        
      subProducts:[{
      id: 1,
      name: "Kadala dal",
      description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
      image: pasi,
      price: 100.00
      },
      {
        id: 2,
        name: "Kadala dal 2",
        description: "Adjustable LED desk lamp with multiple brightness settings and color temperatures.",
        image: pasi,
        price: 100.00
        }
    ]
    },
    // {
    //   id: 2,
    //   name: "Wireless Headphones",
    //   description: "Premium noise-cancelling headphones with 30-hour battery life and comfortable fit.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 3,
    //   name: "Smart Watch",
    //   description: "Fitness tracker with heart rate monitoring, sleep analysis, and smartphone notifications.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 4,
    //   name: "Portable Bluetooth Speaker",
    //   description: "Waterproof speaker with 360° sound and 12 hours of battery life.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 5,
    //   name: "Digital Camera",
    //   description: "20MP camera with 4K video recording and advanced autofocus technology.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 6,
    //   name: "Coffee Maker",
    //   description: "Programmable coffee maker with built-in grinder and thermal carafe.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 7,
    //   name: "Ergonomic Office Chair",
    //   description: "Adjustable chair with lumbar support and breathable mesh back.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 8,
    //   name: "Wireless Earbuds",
    //   description: "True wireless earbuds with noise isolation and touch controls.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 9,
    //   name: "Smart Home Hub",
    //   description: "Central control for all your smart home devices with voice assistant.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 10,
    //   name: "Air Purifier",
    //   description: "HEPA filter purifier for rooms up to 500 sq ft with air quality monitor.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 11,
    //   name: "Fitness Tracker",
    //   description: "Waterproof activity tracker with heart rate monitoring and sleep tracking.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 12,
    //   name: "Mechanical Keyboard",
    //   description: "Customizable RGB backlit mechanical keyboard with tactile switches.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 13,
    //   name: "Wireless Mouse",
    //   description: "Ergonomic wireless mouse with adjustable DPI and programmable buttons.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 14,
    //   name: "External SSD",
    //   description: "1TB portable solid state drive with USB-C connectivity and durable design.",
    //   image: img,
    //   price: 100.00
    // },
    // {
    //   id: 15,
    //   name: "Smart Thermostat",
    //   description: "Energy-saving thermostat that learns your preferences and schedule.",
    //   image: img,
    //   price: 100.00
    // }
    
  ];*/