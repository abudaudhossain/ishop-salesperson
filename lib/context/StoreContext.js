"use client";
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import list from "../api/products";
import getProductList from "../api/products";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [user, setUser] = useLocalStorage("user", null);
  const [products, setProducts] = useLocalStorage("products", []);

  return (
    <StoreContext.Provider
      value={{ cart, setCart, user, setUser, products, setProducts }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
