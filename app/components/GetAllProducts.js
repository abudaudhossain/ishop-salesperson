"use client";

import getProductList from "@/lib/api/products";
import { useStore } from "@/lib/context/StoreContext";
import { useEffect } from "react";

const GetAllProducts = () => {
  const { setProducts } = useStore();
  useEffect(() => {
    setProducts(() => getProductList().data);
  }, []);
  return <></>;
};

export default GetAllProducts;
