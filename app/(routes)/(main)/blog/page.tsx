import { Badge } from '@/components/ui/badge';
import { PostSelect } from '@/db/schema';
import { cn, formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

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
  const posts: PostSelect[] = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/blog`)
    .then((res) => res.json())
    .then((res) => res.data);

  return (
    <>
      <h2 className="text-3xl font-bold">
        Blog
        <span className="text-primary">.</span>
      </h2>
      <div className="columns-1 gap-5 md:columns-2">
        {posts
          .filter((post) => !post.draft)
          .map((post, idx) => (
            <div
              key={post.id}
              className={cn(
                idx !== 0 && 'mt-5',
                'flex break-inside-avoid flex-col gap-5 rounded-3xl border p-5',
              )}
            >
              {post.cover && (
                <div className="relative aspect-video h-auto w-full">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    priority={true}
                    fill
                    className="rounded-2xl"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-muted-foreground">
                    {formatDate(post.createdAt)}
                  </span>
                  <Badge className="flex w-min capitalize">{post.tag}</Badge>
                </div>
                <Link href={`/blog/${post.slug}`} className="relative text-xl font-bold underline">
                  {post.title}
                </Link>
                <p className="text-sm text-muted-foreground">{post.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
