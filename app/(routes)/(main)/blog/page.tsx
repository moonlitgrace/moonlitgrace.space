import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PostSelect } from '@/db/schema';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Metadata } from 'next';

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
  const posts: Omit<PostSelect, 'content' | 'cover'>[] = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blog`,
  )
    .then((res) => res.json())
    .then((res) => res.data);

  return (
    <>
      <h2 className="text-3xl font-bold">
        Blog
        <span className="text-primary">.</span>
      </h2>
      <div className="flex flex-col gap-5">
        {posts
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
