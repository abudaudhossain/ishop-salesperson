"use client";
import AddToCartBtn from "@/app/components/AddToCartBtn";
import Product from "@/app/components/Product";
import QuantityControllers from "@/app/components/QuantityControllers";
import getProductList from "@/lib/api/products";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(() => getProductList().data);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(getProductList().data);
    } else {
      const results = getProductList().data?.filter((item) =>
        item.title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );

      setFilteredData(results);
    }
  }, [searchTerm]);

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen max-w-[600px] m-auto px-4 pt-4">
      <div className="relative">
        {/* Fixed search input */}
        <div className="fixed top-0 left-0 w-full bg-white z-10 p-4 shadow-md">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full h-12 py-1 pl-4 pr-32 outline-none focus:ring-none focus:border-none"
            />
            {searchTerm && (
              <button
                onClick={handleClear}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer w-10 h-10 bg-secondary rounded-full"
              >
                x
              </button>
            )}
          </div>
        </div>

        {/* Content section with top margin to offset the fixed search bar */}
        <ul id="content" className="pt-20 mb-20">
          {filteredData.length < 1 ? (
            <h2>Products Not Found</h2>
          ) : (
            filteredData?.map((item) => <Product  key={item.id} product={item} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default Products;
