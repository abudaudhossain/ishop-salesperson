"use client";
import { useStore } from "@/lib/context/StoreContext";
import Image from "next/image";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart, setCart } = useStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure rendering happens only after hydration
  }, []);

  if (!isMounted) {
    return null; // Prevent mismatched UI during hydration
  }

  // Handle quantity change
  const handleIncrement = (itemId) => {
    setCart(cart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const handleDecrement = (itemId) => {
    setCart(cart.map((item) => (item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)));
  };

  // Calculate total price
  const calculateTotal = () => cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);

  return (
    <div className="min-h-screen max-w-[600px] m-auto px-4 pt-4 mb-16">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
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
              Total: {cart[0].currencySign}
              {calculateTotal()}
            </p>
            <button className="inline-flex font-semibold  items-center justify-center  rounded-full w-full h-12 px-4 py-2 my-4 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Proceed to Order
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
