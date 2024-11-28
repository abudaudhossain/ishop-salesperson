"use client";
import React, { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useStore } from "@/lib/context/StoreContext";
import addToCart from "@/lib/utility/addToCart";

const Scanner = () => {
  const { products, cart, setCart } = useStore();
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState("");
  const scannerRef = useRef(null);
  const timeoutRef = useRef(null);

  const startScanner = () => {
    setScanning(true);
  };
  const closeScanner = () => {
    setScanning(false);
    setResult(null);
    if (scannerRef.current) {
      scannerRef.current.clear().catch((error) => {
        console.error("Error stopping scanner:", error);
      });
    }
  };

  useEffect(() => {
    if (scanning) {
      const scanner = new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: 250,
      });
      scannerRef.current = scanner;

      scanner.render(
        (decodedText) => {
          setResult(decodedText);

          setTimeout(() => {
            setResult(null);
          }, 5000);

          // setScanning(false);
          // scanner.clear();
        },
        (error) => {
          //   console.error("Error scanning:", error);
        }
      );

      // Cleanup when component unmounts or scanning stops
      return () => {
        setScanning(false);
        scanner.clear();
      };
    }
  }, [scanning]);

  useEffect(() => {
    if (result) {
      let product = products.find((item) => item.sku === result);
      const newCart = addToCart([...cart], { ...product, quantity: 1 });
      setCart([...newCart]);

      timeoutRef.current = setTimeout(() => {
        setResult(null);
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [result]);

  return (
    <>
      {!scanning ? (
        <button
          className={`inline-flex  items-center justify-center  rounded-full w-full h-12  py-2 my-4 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
            scanning ? "cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
          onClick={startScanner}
          disabled={scanning}
        >
          <svg
            className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Open Scanner
        </button>
      ) : (
        <button
          className={`inline-flex  items-center justify-center  rounded-full w-full h-12  py-2 my-4 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
            scanning ? "cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
          onClick={closeScanner}
        >
          <svg
            className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Close Scanner
        </button>
      )}

      {scanning && <div id="reader" className="mt-4"></div>}
      {result && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded">
          <h2 className="text-lg font-semibold">Scan Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </>
  );
};

export default Scanner;
