import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

interface RestProps {
  params: { slug: string };
}

export async function GET(_request: NextRequest, { params }: RestProps) {
  return params.slug;
}

export async function DELETE(_request: NextRequest, { params }: RestProps) {
  try {
    await db.delete(posts).where(eq(posts.slug, params.slug));
    return NextResponse.json({ message: 'Deleted successfully!' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Deletion failed!' }, { status: 500 });
  }
}
