import React from "react";

const AddToCartBtn = ({ className, addToCartHandler }) => {
  return (
    <button
      onClick={addToCartHandler}
      className={`font-semibold  h-12 px-4 py-2 my-4 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${className}`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
