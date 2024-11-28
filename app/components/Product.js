"use client";
import React, { useState } from "react";
import QuantityControllers from "./QuantityControllers";
import AddToCartBtn from "./AddToCartBtn";
import Image from "next/image";
import addToCart from "@/lib/utility/addToCart";
import { useStore } from "@/lib/context/StoreContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { cart, setCart } = useStore();
  const addToCartHandler = (item) => {
    const newCart = addToCart([...cart], item);
    setCart([...newCart]);
    alert("Product add to cart successfully");
  };
  const productDetails = (id) => {
    router.push(`/products/${product.id}`);
  };
  return (
    <div
      onClick={productDetails}
      className="flex item-center bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer"
    >
      <div className="relative w-24 h-24">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      <div className="ml-4 flex-1">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">
          {product.unitSize} {product.unit}
        </p>
        <p className="text-gray-600">
          Price: {product.currencySign}
          {product.unitPrice}
        </p>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">
          {product.currencySign}
          {product.unitPrice * quantity}
          <span className="ml-1 text-gray-600">{product.currency}</span>
        </p>
        <QuantityControllers quantity={quantity} setQuantity={setQuantity} />
        <AddToCartBtn
          addToCartHandler={(e) => {
            e.stopPropagation();
            // return addToCartHandler({ ...product, quantity });
          }}
          className="font-base  px-4  py-1 text-sm mb-0 cursor-not-allowed "
          
        />
      </div>
    </div>
  );
};

export default Product;
