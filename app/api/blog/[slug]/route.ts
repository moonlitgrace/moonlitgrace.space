import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

interface RestProps {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: NextRequest, props: RestProps) {
  const params = await props.params;
  try {
    const post = await db
      .select()
      .from(posts)
      .where(eq(posts.slug, params.slug))
      .then((result) => result[0]);

    if (post) return NextResponse.json({ data: post, message: 'success' });
    return NextResponse.json(
      { message: 'post not found' },
      { status: 404, statusText: 'post not found' },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'error' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, props: RestProps) {
  const params = await props.params;
  try {
    await db.delete(posts).where(eq(posts.slug, params.slug));
    return NextResponse.json({ message: 'success' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'error' }, { status: 500 });
  }
}
