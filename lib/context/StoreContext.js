"use client"
import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [user, setUser] = useLocalStorage('user', null);

  return (
    <StoreContext.Provider value={{ cart, setCart, user, setUser }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
