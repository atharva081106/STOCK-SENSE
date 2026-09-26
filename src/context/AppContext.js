"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [products, setProducts] = useState([
    { id: '1', name: "Sleeved cardigan", sku: "APP-CRD-01", category: "Apparel", stock: 118, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&h=100&fit=crop", oldPrice: 55.00, salePercent: 5, newPrice: 52.25, itemsSold: 294 },
    { id: '2', name: "Relaxed fit linen shorts", sku: "APP-SHR-02", category: "Apparel", stock: 328, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=100&h=100&fit=crop", oldPrice: 130.00, salePercent: 8, newPrice: 119.60, itemsSold: 2 },
    { id: '3', name: "Womens' sweatshirt", sku: "APP-SWT-03", category: "Apparel", stock: 118, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop", oldPrice: 311.00, salePercent: 15, newPrice: 264.35, itemsSold: 294 },
    { id: '4', name: "Classic White T-Shirt", sku: "APP-TSH-04", category: "Apparel", stock: 540, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop", oldPrice: 25.00, salePercent: 0, newPrice: 25.00, itemsSold: 850 },
    { id: '5', name: "Denim Jacket", sku: "APP-JCK-05", category: "Outerwear", stock: 12, uom: "pcs", status: "Low Stock", image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=100&h=100&fit=crop", oldPrice: 120.00, salePercent: 10, newPrice: 108.00, itemsSold: 45 },
    { id: '6', name: "Pleated Midi Skirt", sku: "APP-SKR-06", category: "Apparel", stock: 0, uom: "pcs", status: "Out of Stock", image: "https://images.unsplash.com/photo-1583496924859-9944321685dc?w=100&h=100&fit=crop", oldPrice: 65.00, salePercent: 20, newPrice: 52.00, itemsSold: 120 },
    { id: '7', name: "Oversized Hoodie", sku: "APP-HOD-07", category: "Apparel", stock: 85, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop", oldPrice: 75.00, salePercent: 5, newPrice: 71.25, itemsSold: 320 },
    { id: '8', name: "Slim Fit Chinos", sku: "APP-CHN-08", category: "Apparel", stock: 4, uom: "pcs", status: "Low Stock", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=100&h=100&fit=crop", oldPrice: 85.00, salePercent: 0, newPrice: 85.00, itemsSold: 15 },
    { id: '9', name: "V-Neck Sweater", sku: "APP-SWT-09", category: "Apparel", stock: 150, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=100&h=100&fit=crop", oldPrice: 90.00, salePercent: 25, newPrice: 67.50, itemsSold: 410 },
    { id: '10', name: "Puffer Coat", sku: "APP-COT-10", category: "Outerwear", stock: 8, uom: "pcs", status: "Low Stock", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop", oldPrice: 200.00, salePercent: 10, newPrice: 180.00, itemsSold: 60 },
  ]);

  const [operations, setOperations] = useState([
    { id: '1', ref: "WH/IN/0001", type: "Receipt", contact: "Reliance Retail", date: "2023-10-25", status: "Ready", badge: "badge-success" },
    { id: '2', ref: "WH/OUT/0014", type: "Delivery", contact: "Flipkart", date: "2023-10-26", status: "Waiting", badge: "badge-warning" },
    { id: '3', ref: "WH/IN/0002", type: "Receipt", contact: "Rajesh Kumar", date: "2023-10-27", status: "Ready", badge: "badge-success" },
    { id: '4', ref: "WH/OUT/0015", type: "Delivery", contact: "Priya Sharma", date: "2023-10-27", status: "Waiting", badge: "badge-warning" },
    { id: '5', ref: "WH/IN/0003", type: "Receipt", contact: "Amit Singh", date: "2023-10-28", status: "Ready", badge: "badge-success" },
    { id: '6', ref: "WH/OUT/0016", type: "Delivery", contact: "Neha Gupta", date: "2023-10-28", status: "Ready", badge: "badge-success" },
    { id: '7', ref: "WH/INT/0001", type: "Internal", contact: "Production", date: "2023-10-29", status: "Ready", badge: "badge-success" },
    { id: '8', ref: "WH/OUT/0017", type: "Delivery", contact: "Tata Motors", date: "2023-10-29", status: "Waiting", badge: "badge-warning" },
    { id: '9', ref: "WH/IN/0004", type: "Receipt", contact: "Mahindra Logistics", date: "2023-10-30", status: "Waiting", badge: "badge-warning" },
    { id: '10', ref: "WH/INT/0002", type: "Internal", contact: "Quality Control", date: "2023-10-30", status: "Ready", badge: "badge-success" },
  ]);

  const [warehouses, setWarehouses] = useState([
    { id: '1', name: "Main Warehouse", location: "Mumbai, MH", status: "Active" },
    { id: '2', name: "Production Floor", location: "Bengaluru, KA", status: "Active" },
  ]);

  const [user, setUser] = useState(null); // null means not logged in

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now().toString(), status: product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock' };
    setProducts([...products, newProduct]);
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
