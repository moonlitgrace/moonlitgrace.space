import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { db } from '@/db';
import { posts, PostSelect } from '@/db/schema';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Metadata } from 'next';
import { desc } from 'drizzle-orm';

export const metadata: Metadata = {
  title: 'Blog | Moonlitgrace',
  description:
    'Dive into the Blog at Moonlitgrace, where a passionate web developer and open-source contributor shares thoughts, tutorials, and insights—all under the alias Moonlitgrace.',
  openGraph: {
    title: 'Blog | Moonlitgrace',
    description:
      'Dive into the Blog at Moonlitgrace, where a passionate web developer and open-source contributor shares thoughts, tutorials, and insights—all under the alias Moonlitgrace.',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'Moonlitgrace',
    locale: 'en_US',
    type: 'website',
  },
};

export default async function BlogPage() {
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

  return (
    <>
      <h2 className="text-3xl font-bold">
        Blog
        <span className="text-primary">.</span>
      </h2>
      <div className="flex flex-col gap-5">
        {postsData
          .filter((post) => !post.draft)
          .map((post) => (
            <div key={post.id} className="flex flex-col">
              <span className="text-xs font-bold uppercase text-muted-foreground">
                {formatDate(post.createdAt)}
              </span>
              <div className="flex items-center gap-4">
                <Link href={`/blog/${post.slug}`} className="relative text-lg underline">
                  {post.title}
                </Link>
                <Separator className="hidden flex-1 md:flex" />
                <Badge className="hidden w-min capitalize md:flex">{post.tag}</Badge>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
