"use client";
import Image from "next/image";
import { useState } from "react";

const ProductDetail = () => {
  const product = {
    image: "https://res.cloudinary.com/dkioxcw3q/image/upload/v1731421037/lmon-800_rea0zd.webp",
    title: "Lifebuoy Soap Bar Lemon Fresh",
    description:
      "Experience a refreshing shower every day with LIFEBUOY Lemon Fresh Soap Bar. It rejuvenates your senses keeping you fresh throughout the day. Formulated with an efficient cleansing property of lemons, this soap bar is packed with natural antibacterial properties. This disinfectant soap protects your skin from disease-causing bacteria and ensures better germ protection for you and your family. The fragrance will leave you thoroughly fresh.",
    unitPrice: 50,
    currency: "BDT",
    currencySign: "৳",
    unit: "gm",
    unitSize: "100",
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div className="min-h-screen max-w-[600px] m-auto px-4 pt-4">
      <div className="rounded-lg overflow-hidden">
        <div className="">
          <Image src={product.image} alt={product.title} width={500} height={500} className="w-full h-80 object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>

          <div className="flex justify-between items-start">
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

            {/* Quantity Controls */}
            <div className="flex items-center mt-4">
              <button onClick={handleDecrement} className="px-3 py-1 bg-teal-600 text-white font-bold rounded-l focus:outline-none hover:bg-teal-700">
                -
              </button>
              <span className="px-4 py-1 border-t border-b border-gray-300 text-gray-800 font-medium">{quantity}</span>
              <button onClick={handleIncrement} className="px-3 py-1 bg-teal-600 text-white font-bold rounded-r focus:outline-none hover:bg-teal-700">
                +
              </button>
            </div>
          </div>

          <button className="inline-flex font-semibold  items-center justify-center  rounded-full w-full h-12 px-4 py-2 my-4 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
