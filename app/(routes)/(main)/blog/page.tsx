import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { db } from '@/db';
import { posts, PostSelect } from '@/db/schema';
import Link from 'next/link';
import { Metadata } from 'next';
import { desc } from 'drizzle-orm';
import { formatDate } from '@/utils/date';

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
        {postsData.map((item) => (
          <div key={item.id} className="flex flex-col">
            <span className="text-xs font-bold uppercase text-muted-foreground">
              {formatDate(item.createdAt)}
            </span>
            <div className="flex items-center gap-4">
              <Link href={`/blog/${item.slug}`} className="relative text-lg underline">
                {item.title}
              </Link>
              <Separator className="hidden flex-1 md:flex" />
              <Badge className="hidden w-min capitalize md:flex">{item.tag}</Badge>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
