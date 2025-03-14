import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Components/Products.jsx";
import Home from "./Components/Home.jsx";
import ProductDetail from "./Components/Prod1.jsx";
import Cart from "./Components/Cart.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-teal-500 to-teal-600 p-4 flex justify-between items-center text-white shadow-md">
          <div className="text-xl font-bold font-sans flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            ECommerce
          </div>
          <nav className="flex space-x-6 items-center">
            <a href="/" className="hover:text-teal-100 transition duration-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-7-7v14" />
              </svg>
              Home
            </a>
            <a href="/product" className="hover:text-teal-100 transition duration-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Products
            </a>
            <a href="/cart" className="hover:text-teal-100 transition duration-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart
            </a>
            <a href="#" className="hover:text-teal-100 transition duration-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
            <button className="bg-white text-teal-600 px-4 py-2 rounded-lg shadow hover:bg-teal-50 transition duration-200 font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </button>
          </nav>
        </header>
        
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-teal-700 text-white p-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-teal-100">We are committed to providing high-quality products and exceptional customer service.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-teal-100 hover:text-white">Home</a></li>
                  <li><a href="/product" className="text-teal-100 hover:text-white">Products</a></li>
                  <li><a href="#" className="text-teal-100 hover:text-white">About</a></li>
                  <li><a href="#" className="text-teal-100 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-teal-100">123 Commerce St.<br />Business City, BC 12345<br />info@yourecommerce.com</p>
              </div>
            </div>
            <div className="border-t border-teal-600 mt-8 pt-6 text-center text-teal-100">
              <p>&copy; 2025 Your Store. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;