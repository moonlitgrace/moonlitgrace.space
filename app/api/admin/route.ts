import { db } from '@/db/index';
import { posts } from '@/db/schema';
import { count } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const postsCount = (await db.select({ count: count() }).from(posts))[0];

    const obj = {
      posts: postsCount,
    };

    return NextResponse.json(obj);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Data counting failed!' }, { status: 500 });
  }
}
