"use client";
import { useState, useEffect } from "react";

const data = [
  { value: "bitcoin (BTC)", image: "https://cdn.cryptodisplay.net/cryptos/bitcoin.png" },
  { value: "ethereum (ETH)", image: "https://cdn.cryptodisplay.net/cryptos/ethereum.png" },
  { value: "cardano (ADA)", image: "https://cdn.cryptodisplay.net/cryptos/cardano.png" },
  { value: "xrp (XRP)", image: "https://cdn.cryptodisplay.net/cryptos/ripple.png" },
  { value: "dogecoin (DOGE)", image: "https://cdn.cryptodisplay.net/cryptos/dogecoin.png" },
  { value: "chainlink (LINK)", image: "https://cdn.cryptodisplay.net/cryptos/chainlink.png" },
  { value: "litecoin (LTC)", image: "https://cdn.cryptodisplay.net/cryptos/litecoin.png" },
  { value: "bitcoin cash (BCH)", image: "https://cdn.cryptodisplay.net/cryptos/bitcoin-cash.png" },
  { value: "stellar (XLM)", image: "https://cdn.cryptodisplay.net/cryptos/stellar.png" },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(data);
    } else {
      const results = data.filter((item) => item.value.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredData(results);
    }
  }, [searchTerm]);

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen max-w-[600px] m-auto px-4 pt-4">
      <div className="">
        <div className="rounded-xl ">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="rounded-full w-full h-12 bg-transparent py-1 pl-8 pr-32 outline-none border-1 border-gray-100  shadow-secondary-1 hover:outline-none focus:ring-teal-200 focus:border-teal-200 hover:bg-[#605CEB] hover:bg-opacity-20"
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
          <ul id="content">
            {filteredData.map((item, index) => (
              <li
                key={index}
                className={`flex items-center justify-between gap-4 my-1 p-4 cursor-pointer hover:bg-[#605CEB] hover:bg-opacity-20 transition-colors rounded-lg bg-white p-6 text-surface shadow-secondary-1 text-center`}
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.value} width="30" className="rounded-full" />
                  <div>
                    <h1 className="font-semibold">{item.value}</h1>
                    <p className="">{item.value}</p>
                  </div>
                </div>
                <h1>120 tk</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
