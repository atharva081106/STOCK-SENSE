import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Add simple status logic
    const status = body.stock > 10 ? 'In Stock' : body.stock > 0 ? 'Low Stock' : 'Out of Stock';
    
    const product = await prisma.product.create({
      data: {
        name: body.name,
        sku: body.sku,
        category: body.category || 'Apparel',
        stock: parseInt(body.stock),
        uom: body.uom || 'pcs',
        status: status,
        image: body.image || 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop',
        oldPrice: parseFloat(body.oldPrice || 0),
        salePercent: parseInt(body.salePercent || 0),
        newPrice: parseFloat(body.newPrice || 0),
        itemsSold: parseInt(body.itemsSold || 0)
      }
    });
    
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
