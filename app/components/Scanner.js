
"use client"
import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState("");

  const startScanner = () => {
    setScanning(true);
  };

  useEffect(() => {
    if (scanning) {
      const scanner = new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: 250,
      });

      scanner.render(
        (decodedText) => {
          setResult(decodedText);
          setScanning(false);
          scanner.clear();
        },
        (error) => {
          console.error("Error scanning:", error);
        }
      );

      // Cleanup when component unmounts or scanning stops
      return () => {
        scanner.clear();
      };
    }
  }, [scanning]);

  return (
    <div className="container mx-auto p-4">
     
      <button
        className={`px-4 py-2 rounded ${
          scanning ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white"
        }`}
        onClick={startScanner}
        disabled={scanning}
      >
        {scanning ? "Scanning..." : "Start Scanner"}
      </button>
      {scanning && <div id="reader" className="mt-4"></div>}
      {result && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded">
          <h2 className="text-lg font-semibold">Scan Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Scanner;
