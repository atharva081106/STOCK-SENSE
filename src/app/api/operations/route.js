import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const operations = await prisma.operation.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(operations);
  } catch (error) {
    console.error("Error fetching operations:", error);
    return NextResponse.json({ error: "Failed to fetch operations" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    const operation = await prisma.operation.create({
      data: {
        ref: body.ref || `OP-${Date.now().toString().slice(-6)}`,
        type: body.type || 'Transfer',
        contact: body.contact || 'Internal',
        status: body.status || 'Waiting',
        badge: body.badge || 'badge-neutral',
      }
    });
    
    return NextResponse.json(operation, { status: 201 });
  } catch (error) {
    console.error("Error creating operation:", error);
    return NextResponse.json({ error: "Failed to create operation" }, { status: 500 });
  }
}
