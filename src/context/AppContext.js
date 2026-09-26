"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    // Fetch products
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setProducts(data);
      })
      .catch(err => console.error("Failed to load products", err));

    // Fetch operations
    fetch('/api/operations')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setOperations(data);
      })
      .catch(err => console.error("Failed to load operations", err));
  }, []);

  const [warehouses, setWarehouses] = useState([
    { id: '1', name: "Main Warehouse", location: "Mumbai, MH", status: "Active" },
    { id: '2', name: "Production Floor", location: "Bengaluru, KA", status: "Active" },
  ]);

  const [user, setUser] = useState(null); // null means not logged in

  const addProduct = async (product) => {
    // Send to API
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
      if (response.ok) {
        const newProduct = await response.json();
        setProducts(prev => [newProduct, ...prev]);
      }
    } catch (error) {
      console.error("Failed to add product", error);
    }
  };

  const login = (email, password) => {
    // Mock login
    setUser({ name: "Rahul Verma", email, role: "Inventory Manager" });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{
      products, addProduct,
      operations,
      warehouses,
      user, login, logout
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
