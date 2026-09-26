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
