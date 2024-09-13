import AdminBlogForm from '@/app/_components/_admin/admin-blog-form';
import { db } from '@/db';
import { posts, PostSelect } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function Page({ params }: { params: { slug: string } }) {
  const postData: PostSelect = (
    await db.select().from(posts).where(eq(posts.slug, params.slug))
  )[0];

  return (
    <AdminBlogForm
      id={postData.id}
      title={postData.title}
      tag={postData.tag}
      content={postData.content}
      cover={postData.cover}
    />
  );
}
