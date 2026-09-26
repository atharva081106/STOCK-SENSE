"use client";

import React, { createContext, useContext, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const AppContext = createContext();

export function AppProvider({ children }) {
  // SWR automatically handles caching, revalidation on focus, and deduplication
  const { data: rawProducts, mutate: mutateProducts } = useSWR('/api/products', fetcher);
  const { data: rawOperations, mutate: mutateOperations } = useSWR('/api/operations', fetcher);

  const products = Array.isArray(rawProducts) ? rawProducts : [];
  const operations = Array.isArray(rawOperations) ? rawOperations : [];

  const [warehouses, setWarehouses] = useState([
    { id: '1', name: "Main Warehouse", location: "Mumbai, MH", status: "Active" },
    { id: '2', name: "Production Floor", location: "Bengaluru, KA", status: "Active" },
  ]);

  const [user, setUser] = useState(null);

  const addProduct = async (product) => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
      if (response.ok) {
        mutateProducts(); // Revalidate SWR cache
      }
    } catch (error) {
      console.error("Failed to add product", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (response.ok) mutateProducts();
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  const addOperation = async (operation) => {
    try {
      const response = await fetch('/api/operations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(operation)
      });
      if (response.ok) {
        mutateOperations(); // Revalidate SWR cache
      }
    } catch (error) {
      console.error("Failed to add operation", error);
    }
  };

  const deleteOperation = async (id) => {
    try {
      const response = await fetch(`/api/operations/${id}`, { method: 'DELETE' });
      if (response.ok) mutateOperations();
    } catch (error) {
      console.error("Failed to delete operation", error);
    }
  };

  const login = (email, password) => {
    setUser({ name: "Rahul Verma", email, role: "Inventory Manager" });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{
      products, addProduct, deleteProduct,
      operations, addOperation, deleteOperation,
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
