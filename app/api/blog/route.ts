import { db } from '@/db';
import { posts } from '@/db/schema';
import { AdminBlogData } from '@/zod_schemas/admin';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import slugify from 'slugify';

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

      return NextResponse.json({ message: 'Success' });
    } else {
      await db.insert(posts).values({
        title: data.title,
        tag: data.tag,
        content: data.content,
        slug: slugify(data.title.toLowerCase()),
        ...(data.cover && { cover: data.cover }),
        draft: data.draft,
      });

      return NextResponse.json({ message: 'Success' });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Data update failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const data: { postId: string } = await request.json();

  try {
    await db.delete(posts).where(eq(posts.id, Number(data.postId)));
    return NextResponse.json({ message: 'Deleted successfully!' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Deletion failed!' }, { status: 500 });
  }
}
