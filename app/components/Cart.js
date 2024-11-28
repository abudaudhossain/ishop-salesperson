"use client";

import { useStore } from "@/lib/context/StoreContext";
import Image from "next/image";
import { useEffect, useState } from "react";

const Cart = () => {
  const { products, cart, setCart } = useStore();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true); // Ensure rendering happens only after hydration
  }, []);

  if (!isMounted) {
    return null; // Prevent mismatched UI during hydration
  }

  // Handle quantity change
  const handleIncrement = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <>
      {cart.reverse().map((item) => (
        <div
          key={item.id}
          className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4"
        >
          <div className="relative w-24 h-24">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
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
              <span className="px-4 py-1 border-t border-b border-gray-300">
                {item.quantity}
              </span>
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
    </>
  );
};

export default Cart;
