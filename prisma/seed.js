const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Clean existing data
  await prisma.operation.deleteMany({});
  await prisma.product.deleteMany({});

  const products = [
    { name: "Sleeved cardigan", sku: "APP-CRD-01", category: "Apparel", stock: 118, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&h=100&fit=crop", oldPrice: 55.00, salePercent: 5, newPrice: 52.25, itemsSold: 294 },
    { name: "Relaxed fit linen shorts", sku: "APP-SHR-02", category: "Apparel", stock: 328, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=100&h=100&fit=crop", oldPrice: 130.00, salePercent: 8, newPrice: 119.60, itemsSold: 2 },
    { name: "Womens' sweatshirt", sku: "APP-SWT-03", category: "Apparel", stock: 118, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop", oldPrice: 311.00, salePercent: 15, newPrice: 264.35, itemsSold: 294 },
    { name: "Classic White T-Shirt", sku: "APP-TSH-04", category: "Apparel", stock: 540, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop", oldPrice: 25.00, salePercent: 0, newPrice: 25.00, itemsSold: 850 },
    { name: "Denim Jacket", sku: "APP-JCK-05", category: "Outerwear", stock: 12, uom: "pcs", status: "Low Stock", image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=100&h=100&fit=crop", oldPrice: 120.00, salePercent: 10, newPrice: 108.00, itemsSold: 45 },
    { name: "Pleated Midi Skirt", sku: "APP-SKR-06", category: "Apparel", stock: 0, uom: "pcs", status: "Out of Stock", image: "https://images.unsplash.com/photo-1583496924859-9944321685dc?w=100&h=100&fit=crop", oldPrice: 65.00, salePercent: 20, newPrice: 52.00, itemsSold: 120 },
    { name: "Oversized Hoodie", sku: "APP-HOD-07", category: "Apparel", stock: 85, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop", oldPrice: 75.00, salePercent: 5, newPrice: 71.25, itemsSold: 320 },
    { name: "Slim Fit Chinos", sku: "APP-CHN-08", category: "Apparel", stock: 4, uom: "pcs", status: "Low Stock", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=100&h=100&fit=crop", oldPrice: 85.00, salePercent: 0, newPrice: 85.00, itemsSold: 15 },
    { name: "V-Neck Sweater", sku: "APP-SWT-09", category: "Apparel", stock: 150, uom: "pcs", status: "In Stock", image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=100&h=100&fit=crop", oldPrice: 90.00, salePercent: 25, newPrice: 67.50, itemsSold: 410 },
    { name: "Puffer Coat", sku: "APP-COT-10", category: "Outerwear", stock: 8, uom: "pcs", status: "Low Stock", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop", oldPrice: 200.00, salePercent: 10, newPrice: 180.00, itemsSold: 60 },
  ];

  for (const p of products) {
    await prisma.product.create({ data: p });
  }

  const operations = [
    { ref: "WH/IN/0001", type: "Receipt", contact: "Reliance Retail", status: "Ready", badge: "badge-success" },
    { ref: "WH/OUT/0014", type: "Delivery", contact: "Flipkart", status: "Waiting", badge: "badge-warning" },
    { ref: "WH/IN/0002", type: "Receipt", contact: "Rajesh Kumar", status: "Ready", badge: "badge-success" },
    { ref: "WH/OUT/0015", type: "Delivery", contact: "Priya Sharma", status: "Waiting", badge: "badge-warning" },
    { ref: "WH/IN/0003", type: "Receipt", contact: "Amit Singh", status: "Ready", badge: "badge-success" },
    { ref: "WH/OUT/0016", type: "Delivery", contact: "Neha Gupta", status: "Ready", badge: "badge-success" },
    { ref: "WH/INT/0001", type: "Internal", contact: "Production", status: "Ready", badge: "badge-success" },
    { ref: "WH/OUT/0017", type: "Delivery", contact: "Tata Motors", status: "Waiting", badge: "badge-warning" },
    { ref: "WH/IN/0004", type: "Receipt", contact: "Mahindra Logistics", status: "Waiting", badge: "badge-warning" },
    { ref: "WH/INT/0002", type: "Internal", contact: "Quality Control", status: "Ready", badge: "badge-success" },
  ];

  for (const o of operations) {
    await prisma.operation.create({ data: o });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
