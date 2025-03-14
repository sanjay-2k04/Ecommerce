import React, { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);

    const total = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">No products in the cart</p>
      ) : (
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

          <button className="mt-6 w-full bg-teal-500 text-white py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
