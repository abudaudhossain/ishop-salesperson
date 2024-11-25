"use client";
import AddToCartBtn from "@/app/components/AddToCartBtn";
import QuantityControllers from "@/app/components/QuantityControllers";
import React, { useState } from "react";

const AddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCartHandler = (item) => {
    console.log("add to cart", item);
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center mt-4">
            <span className="text-2xl font-bold text-gray-900">
              {product.currencySign}
              {product.unitPrice}
            </span>
            <span className="ml-1 text-gray-600">{product.currency}</span>
          </div>
          <div className="text-gray-600 mt-2">
            <span>
              {product.unitSize} {product.unit}
            </span>
          </div>
        </div>
        <div>
          <div>
            <span className="text-2xl text-gray-900">Total: </span>
            <span className="text-2xl font-bold text-gray-900">
              {product.currencySign}
              {product.unitPrice * quantity}
            </span>
            <span className="ml-1 text-gray-600">{product.currency}</span>
          </div>
          {/* Quantity Controls */}
          <QuantityControllers quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>

      <AddToCartBtn
        className="w-full"
        addToCartHandler={() => addToCartHandler({ ...product, quantity })}
      />
    </>
  );
};

export default AddToCart;
