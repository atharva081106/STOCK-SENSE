import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Check if data already exists to avoid duplicate seeding
    const productCount = await prisma.product.count();
    
    if (productCount === 0) {
      console.log("Seeding demo data...");
      
      // 1. Seed Products
      const demoProducts = [
        { name: "Woven Care Labels", sku: "WCL-001", category: "Labels", stock: 32000, uom: "pcs", status: "In Stock", oldPrice: 3.0, newPrice: 3.0, itemsSold: 65000 },
        { name: "Hang Tags - Premium", sku: "HTP-002", category: "Tags", stock: 18000, uom: "pcs", status: "In Stock", oldPrice: 8.0, newPrice: 8.0, itemsSold: 18000 },
        { name: "Elastic Waistband - 2 inch", sku: "EWB-003", category: "Elastics", stock: 6, uom: "rolls", status: "Low Stock", oldPrice: 15.0, newPrice: 15.0, itemsSold: 1200 },
        { name: "Drawstrings - Cotton Round", sku: "DSC-004", category: "Strings", stock: 1500, uom: "meters", status: "In Stock", oldPrice: 2.5, newPrice: 2.5, itemsSold: 5000 },
        { name: "Zippers - Invisible 8 inch", sku: "ZPI-005", category: "Zippers", stock: 450, uom: "pcs", status: "In Stock", oldPrice: 5.0, newPrice: 5.0, itemsSold: 3000 },
        { name: "Packaging Bags - Frosted", sku: "PBF-006", category: "Packaging", stock: 0, uom: "pcs", status: "Out of Stock", oldPrice: 12.0, newPrice: 12.0, itemsSold: 8500 },
      ];
      
      for (const p of demoProducts) {
        await prisma.product.create({ data: p });
      }

      // 2. Seed Operations (Receipts, Deliveries, Adjustments)
      const demoOperations = [
        { ref: "WH/IN/0001", type: "Receipts", contact: "Loom & Thread Co.", status: "Done", badge: "success" },
        { ref: "WH/IN/0002", type: "Receipts", contact: "Global Zippers Ltd.", status: "Ready", badge: "warning" },
        { ref: "WH/OUT/0001", type: "Deliveries", contact: "Fashion Brand X", status: "Ready", badge: "warning" },
        { ref: "WH/OUT/0002", type: "Deliveries", contact: "Urban Streetwear", status: "Waiting", badge: "info" },
        { ref: "WH/ADJ/0001", type: "Adjustments", contact: "Inventory Check", status: "Done", badge: "success" },
        { ref: "WH/IN/0003", type: "Receipts", contact: "Packaging Supplies Inc", status: "Draft", badge: "neutral" },
      ];

      for (const op of demoOperations) {
        await prisma.operation.create({ data: op });
      }
      
      console.log("Demo data seeded successfully.");
    }
    
    return NextResponse.json({ success: true, message: "Demo data ready" });
  } catch (error) {
    console.error("Failed to seed demo data:", error);
    return NextResponse.json({ success: false, error: "Failed to seed demo data" }, { status: 500 });
  }
}
