import { db } from '@/db';
import { posts, PostSelect } from '@/db/schema';
import { AdminBlogData } from '@/zod_schemas/admin';
import { desc, eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import slugify from 'slugify';

export async function GET(_request: NextRequest) {
  try {
    const postsData: Omit<PostSelect, 'content' | 'cover'>[] = await db
      .select({
        id: posts.id,
        title: posts.title,
        slug: posts.slug,
        tag: posts.tag,
        createdAt: posts.createdAt,
        draft: posts.draft,
      })
      .from(posts)
      .orderBy(desc(posts.createdAt));

    return NextResponse.json({ data: postsData, message: 'success' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const data: AdminBlogData = await request.json();
  const isToUpdate = data.id !== undefined;

  try {
    if (isToUpdate) {
      await db
        .update(posts)
        .set({
          title: data.title,
          tag: data.tag,
          content: data.content,
          slug: slugify(data.title.toLowerCase()),
          ...(data.cover && { cover: data.cover }),
          draft: data.draft,
        })
        .where(eq(posts.id, data.id as number));

      return NextResponse.json({ message: 'success' });
    } else {
      await db.insert(posts).values({
        title: data.title,
        tag: data.tag,
        content: data.content,
        slug: slugify(data.title.toLowerCase()),
        ...(data.cover && { cover: data.cover }),
        draft: data.draft,
      });

      return NextResponse.json({ message: 'success' });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'error' }, { status: 500 });
  }
}
