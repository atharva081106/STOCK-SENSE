import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json({ error: "Operation ID is required" }, { status: 400 });
    }
    
    await prisma.operation.delete({
      where: { id: id }
    });
    
    return NextResponse.json({ message: "Operation deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting operation:", error);
    return NextResponse.json({ error: "Failed to delete operation" }, { status: 500 });
  }
}
