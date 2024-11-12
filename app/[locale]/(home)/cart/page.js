"use client";
import Image from "next/image";
import { useState } from "react";

const Cart = () => {
  // Example cart items (replace with dynamic data if needed)
  const initialCartItems = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dkioxcw3q/image/upload/v1731421037/lmon-800_rea0zd.webp",
      title: "Lifebuoy Soap Bar Lemon Fresh",
      unitPrice: 50,
      quantity: 2,
      currencySign: "৳",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dkioxcw3q/image/upload/v1731421037/soap2.webp",
      title: "Dove Beauty Bar",
      unitPrice: 80,
      quantity: 1,
      currencySign: "৳",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Handle quantity change
  const handleIncrement = (itemId) => {
    setCartItems(cartItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const handleDecrement = (itemId) => {
    setCartItems(cartItems.map((item) => (item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)));
  };

  // Calculate total price
  const calculateTotal = () => cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0);

  return (
    <div className="min-h-screen max-w-[600px] m-auto px-4 pt-4">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="relative w-24 h-24">
                <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded" />
              </div>

              <div className="ml-4 flex-1">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">
                  Price: {item.currencySign}
                  {item.unitPrice}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-3 py-1 bg-teal-600 text-white font-bold rounded-r focus:outline-none hover:bg-teal-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b border-gray-300">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-3 py-1 bg-teal-600 text-white font-bold rounded-r focus:outline-none hover:bg-teal-700"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">
                  {item.currencySign}
                  {item.unitPrice * item.quantity}
                </p>
                <p className="text-sm text-gray-500">Subtotal</p>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right mt-6">
            <p className="text-2xl font-semibold">
              Total: {cartItems[0].currencySign}
              {calculateTotal()}
            </p>
            <button className="inline-flex font-semibold  items-center justify-center  rounded-full w-full h-12 px-4 py-2 my-4 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
