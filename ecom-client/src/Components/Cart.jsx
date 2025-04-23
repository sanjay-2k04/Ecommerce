import React, { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showQR, setShowQR] = useState(false);
  
  // Sample UPI QR code (you would replace with your actual UPI QR image or generation)
  const upiQRCode = "/api/placeholder/200/200";

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);

    const total = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  const handleCheckout = () => {
    setShowQR(true);
  };

  const handleBackToCart = () => {
    setShowQR(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">No products in the cart</p>
      ) : (
        <>
          {!showQR ? (
            <div className="bg-white p-4 shadow rounded">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                    <p className="font-medium">{item.name}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}

              <div className="flex justify-between items-center font-bold text-lg mt-4">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button 
                className="mt-6 w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition-colors"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          ) : (
            <div className="bg-white p-4 shadow rounded text-center">
              <h2 className="text-xl font-semibold mb-4">UPI Payment</h2>
              <p className="mb-4">Total Amount: <span className="font-bold">${totalPrice.toFixed(2)}</span></p>
              
              <div className="flex justify-center mb-6">
                <div className="border-4 border-teal-500 p-2 rounded">
                  <img 
                    src={upiQRCode} 
                    alt="UPI QR Code" 
                    className="w-48 h-48"
                  />
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">Scan this QR code with any UPI app to make payment</p>
              
              <button 
                className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition-colors mb-2"
                onClick={handleBackToCart}
              >
                Back to Cart
              </button>
              
              <button className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition-colors">
                I've Completed Payment
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;