const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding StockSense demo data...\n');

  // ── 1. USERS ──────────────────────────────────────────────────────────────
  const hashedPassword = await bcrypt.hash('password123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@stocksense.com' },
    update: {},
    create: {
      name: 'Atharva Kulkarni',
      email: 'admin@stocksense.com',
      password: hashedPassword,
      role: 'admin',
    },
  });

  await prisma.user.upsert({
    where: { email: 'purva@stocksense.com' },
    update: {},
    create: {
      name: 'Purva Bhadange',
      email: 'purva@stocksense.com',
      password: hashedPassword,
      role: 'manager',
    },
  });

  console.log('✅ Users seeded');

  // ── 2. PRODUCTS ───────────────────────────────────────────────────────────
  await prisma.product.deleteMany({});

  const products = [
    // Raw Materials
    { name: 'Premium Cotton Fabric', sku: 'RM-CTN-001', category: 'Raw Materials', stock: 3200, uom: 'meters', status: 'active', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&h=200&fit=crop', oldPrice: 85, salePercent: 0, newPrice: 85, itemsSold: 12400 },
    { name: 'Denim Twill Fabric', sku: 'RM-DNM-002', category: 'Raw Materials', stock: 1850, uom: 'meters', status: 'active', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop', oldPrice: 120, salePercent: 5, newPrice: 114, itemsSold: 8200 },
    { name: 'Silk Chiffon Fabric', sku: 'RM-SLK-003', category: 'Raw Materials', stock: 620, uom: 'meters', status: 'active', image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop', oldPrice: 340, salePercent: 10, newPrice: 306, itemsSold: 1800 },
    { name: 'Polyester Lining', sku: 'RM-PLY-004', category: 'Raw Materials', stock: 5400, uom: 'meters', status: 'active', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=200&fit=crop', oldPrice: 45, salePercent: 0, newPrice: 45, itemsSold: 22000 },
    { name: 'Woolen Tweed Fabric', sku: 'RM-WOL-005', category: 'Raw Materials', stock: 410, uom: 'meters', status: 'active', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&h=200&fit=crop', oldPrice: 280, salePercent: 0, newPrice: 280, itemsSold: 3100 },

    // Finished Goods - Tops
    { name: 'Classic White Oxford Shirt', sku: 'FG-SHT-001', category: 'Finished Goods', stock: 1240, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop', oldPrice: 1299, salePercent: 15, newPrice: 1104, itemsSold: 6800 },
    { name: 'Linen Kurta - Navy', sku: 'FG-KRT-002', category: 'Finished Goods', stock: 860, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop', oldPrice: 1899, salePercent: 20, newPrice: 1519, itemsSold: 4200 },
    { name: 'Floral Printed Kurti', sku: 'FG-KTI-003', category: 'Finished Goods', stock: 1560, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop', oldPrice: 999, salePercent: 25, newPrice: 749, itemsSold: 9100 },
    { name: 'Formal Blazer - Charcoal', sku: 'FG-BLZ-004', category: 'Finished Goods', stock: 24, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&h=200&fit=crop', oldPrice: 4499, salePercent: 10, newPrice: 4049, itemsSold: 1800 },
    { name: 'Bomber Jacket - Olive', sku: 'FG-JKT-005', category: 'Finished Goods', stock: 38, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop', oldPrice: 3299, salePercent: 0, newPrice: 3299, itemsSold: 2400 },
    { name: 'Slim Fit Chinos - Khaki', sku: 'FG-CHN-006', category: 'Finished Goods', stock: 740, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=200&fit=crop', oldPrice: 2299, salePercent: 15, newPrice: 1954, itemsSold: 3800 },
    { name: 'Palazzo Pants - Cream', sku: 'FG-PLZ-007', category: 'Finished Goods', stock: 920, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=200&h=200&fit=crop', oldPrice: 1599, salePercent: 20, newPrice: 1279, itemsSold: 5100 },
    { name: 'Straight Fit Jeans - Black', sku: 'FG-JNS-008', category: 'Finished Goods', stock: 1680, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop', oldPrice: 2799, salePercent: 10, newPrice: 2519, itemsSold: 8400 },

    // Semi-Finished
    { name: 'Pre-cut Shirt Panels', sku: 'SF-PNL-001', category: 'Semi-Finished', stock: 2200, uom: 'sets', status: 'active', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop', oldPrice: 320, salePercent: 0, newPrice: 320, itemsSold: 7400 },
    { name: 'Embroidered Patch Panels', sku: 'SF-EMB-002', category: 'Semi-Finished', stock: 640, uom: 'sets', status: 'active', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=200&h=200&fit=crop', oldPrice: 480, salePercent: 8, newPrice: 442, itemsSold: 2100 },

    // Accessories
    { name: 'Metal Zippers - Brass', sku: 'AC-ZIP-001', category: 'Accessories', stock: 14000, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=200&fit=crop', oldPrice: 12, salePercent: 0, newPrice: 12, itemsSold: 45000 },
    { name: 'Mother of Pearl Buttons', sku: 'AC-BTN-002', category: 'Accessories', stock: 28000, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop', oldPrice: 5, salePercent: 0, newPrice: 5, itemsSold: 98000 },
    { name: 'Elastic Waistband - 2 inch', sku: 'AC-ELS-003', category: 'Accessories', stock: 6, uom: 'rolls', status: 'low_stock', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&h=200&fit=crop', oldPrice: 220, salePercent: 0, newPrice: 220, itemsSold: 1240 },
    { name: 'Hang Tags - Premium', sku: 'AC-TAG-004', category: 'Accessories', stock: 0, uom: 'pcs', status: 'out_of_stock', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop', oldPrice: 8, salePercent: 0, newPrice: 8, itemsSold: 18000 },
    { name: 'Woven Care Labels', sku: 'AC-LBL-005', category: 'Accessories', stock: 32000, uom: 'pcs', status: 'active', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=200&fit=crop', oldPrice: 3, salePercent: 0, newPrice: 3, itemsSold: 65000 },
  ];

  for (const p of products) {
    await prisma.product.create({ data: p });
  }
  console.log(`✅ ${products.length} products seeded`);

  // ── 3. OPERATIONS ─────────────────────────────────────────────────────────
  await prisma.operation.deleteMany({});

  const now = new Date();
  const daysAgo = (d) => new Date(now - d * 86400000);

  const operations = [
    // Receipts - incoming from major Indian fabric suppliers
    { ref: 'REC-2024-001', type: 'Receipt', contact: 'Arvind Mills Ltd.', date: daysAgo(1), status: 'Ready', badge: 'badge-success' },
    { ref: 'REC-2024-002', type: 'Receipt', contact: 'Raymond Fabrics', date: daysAgo(3), status: 'Ready', badge: 'badge-success' },
    { ref: 'REC-2024-003', type: 'Receipt', contact: 'Welspun Textiles', date: daysAgo(5), status: 'Waiting', badge: 'badge-warning' },
    { ref: 'REC-2024-004', type: 'Receipt', contact: 'Grasim Industries', date: daysAgo(8), status: 'Ready', badge: 'badge-success' },
    { ref: 'REC-2024-005', type: 'Receipt', contact: 'Trident Group', date: daysAgo(12), status: 'Ready', badge: 'badge-success' },

    // Deliveries - outgoing to major Indian e-commerce & retail
    { ref: 'DEL-2024-001', type: 'Delivery', contact: 'Myntra Logistics', date: daysAgo(0), status: 'Ready', badge: 'badge-success' },
    { ref: 'DEL-2024-002', type: 'Delivery', contact: 'Flipkart Wholesale', date: daysAgo(2), status: 'Waiting', badge: 'badge-warning' },
    { ref: 'DEL-2024-003', type: 'Delivery', contact: 'Reliance Trends', date: daysAgo(4), status: 'Ready', badge: 'badge-success' },
    { ref: 'DEL-2024-004', type: 'Delivery', contact: 'Amazon Fashion', date: daysAgo(6), status: 'Ready', badge: 'badge-success' },
    { ref: 'DEL-2024-005', type: 'Delivery', contact: 'AJIO Retail', date: daysAgo(9), status: 'Waiting', badge: 'badge-warning' },
    { ref: 'DEL-2024-006', type: 'Delivery', contact: 'Nykaa Fashion', date: daysAgo(11), status: 'Ready', badge: 'badge-success' },

    // Transfers - between warehouses across India
    { ref: 'TRF-2024-001', type: 'Transfer', contact: 'Mumbai → Delhi WH', date: daysAgo(1), status: 'Waiting', badge: 'badge-warning' },
    { ref: 'TRF-2024-002', type: 'Transfer', contact: 'Delhi → Bengaluru WH', date: daysAgo(3), status: 'Ready', badge: 'badge-success' },
    { ref: 'TRF-2024-003', type: 'Transfer', contact: 'Bengaluru → Chennai WH', date: daysAgo(7), status: 'Ready', badge: 'badge-success' },
    { ref: 'TRF-2024-004', type: 'Transfer', contact: 'Mumbai → Pune WH', date: daysAgo(14), status: 'Ready', badge: 'badge-success' },

    // Adjustments
    { ref: 'ADJ-2024-001', type: 'Adjust', contact: 'Quality Control', date: daysAgo(2), status: 'Ready', badge: 'badge-success' },
    { ref: 'ADJ-2024-002', type: 'Adjust', contact: 'Damage Write-off', date: daysAgo(10), status: 'Ready', badge: 'badge-success' },
    { ref: 'ADJ-2024-003', type: 'Adjust', contact: 'Annual Stock Count', date: daysAgo(30), status: 'Ready', badge: 'badge-success' },
  ];

  for (const o of operations) {
    await prisma.operation.create({ data: o });
  }
  console.log(`✅ ${operations.length} operations seeded`);

  console.log('\n🎉 Demo seeding complete!');
  console.log('   Login: admin@stocksense.com / password123');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
