"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dkioxcw3q/image/upload/v1731421037/lmon-800_rea0zd.webp",
    title: "Lifebuoy Soap Bar Lemon Fresh",
    description:
      "Experience a refreshing shower every day with LIFEBUOY Lemon Fresh Soap Bar. It rejuvenates your senses keeping you fresh throughout the day. Formulated with an efficient cleansing property of lemons, this soap bar is packed with natural antibacterial properties. This disinfectant soap protects your skin from disease-causing bacteria and ensures better germ protection for you and your family. The fragrance will leave you thoroughly fresh.",
    unitPrice: 50,
    currency: "BDT",
    currencySign: "৳",
    unit: "gm",
    unitSize: "100",
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(data);
    } else {
      const results = data?.filter((item) => item.value?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
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
            filteredData.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`}>
                <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
                  <div className="relative w-24 h-24">
                    <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded" />
                  </div>

                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-600">
                      {item.unitSize} {item.unit}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      {item.currencySign}
                      {item.unitPrice}
                      <span className="ml-1 text-gray-600">{item.currency}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Products;
