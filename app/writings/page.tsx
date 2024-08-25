import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { db } from '@/db';
import { type PostSelect, posts } from '@/db/schema';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Writings. | moonlitspace',
  description: 'my graceful thoughts',
};

export default async function WritingsPage() {
  const postsData: Omit<PostSelect, 'content' | 'cover'>[] = await db
    .select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      tag: posts.tag,
      createdAt: posts.createdAt,
    })
    .from(posts);

  return (
    <>
      <h2 className="text-3xl font-bold">
        Writings<span className="text-primary">.</span>
      </h2>
      <div className="flex flex-col gap-5">
        {postsData.map((item) => (
          <div key={item.id} className="flex flex-col">
            <span className="text-xs font-bold uppercase text-muted-foreground">
              {formatDate(item.createdAt)}
            </span>
            <div className="flex items-center gap-4">
              <Link href={`/writings/${item.slug}`} className="relative text-lg underline">
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
