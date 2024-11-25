"use client";

import { useState } from "react";

const QuantityControllers = ({ quantity, setQuantity }) => {
  const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) return prevQuantity - 1;
      else return prevQuantity;
    });
  };
  return (
    <div className="">
      <button
        onClick={handleDecrement}
        className="px-3 py-1 bg-teal-600 text-white font-bold rounded-l focus:outline-none hover:bg-teal-700"
      >
        -
      </button>
      <span className="px-4 py-1 border-t border-b border-gray-300 text-gray-800 font-medium">
        {quantity}
      </span>
      <button
        onClick={handleIncrement}
        className="px-3 py-1 bg-teal-600 text-white font-bold rounded-r focus:outline-none hover:bg-teal-700"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControllers;
