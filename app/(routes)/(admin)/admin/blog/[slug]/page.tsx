import AdminBlogForm from '@/app/_components/_admin/admin-blog-form';
import { PostSelect } from '@/db/schema';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  const post: Omit<PostSelect, 'createdAt'> = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blog/${params.slug}`,
  )
    .then((res) => {
      if (res.status === 404) notFound();
      return res.json();
    })
    .then((res) => res.data);

  return <AdminBlogForm {...post} />;
}
