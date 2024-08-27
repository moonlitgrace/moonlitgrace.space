import Markdown from '@/components/shared/markdown';
import TableOfContents from '@/components/main/toc';
import { db } from '@/db';
import { posts, PostSelect } from '@/db/schema';
import { formatDate } from '@/lib/utils';
import { eq } from 'drizzle-orm';
import removeMarkdown from 'markdown-to-text';
import { marked, Tokens } from 'marked';
import { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { title, content } = (
    await db
      .select({ title: posts.title, content: posts.content })
      .from(posts)
      .where(eq(posts.slug, params.slug))
  )[0];
  const description = removeMarkdown(content).slice(0, 100) + '...';

  return {
    title,
    description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const postData: PostSelect = (
    await db.select().from(posts).where(eq(posts.slug, params.slug))
  )[0];

  const lexer = new marked.Lexer();
  const tokens = lexer.lex(postData.content);
  const headings = tokens
    .filter((token) => token.type === 'heading')
    .map((token) => (token as Tokens.Heading).text);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-5">
        <h4 className="text-xs font-bold uppercase text-muted-foreground">
          {formatDate(postData.createdAt)}
        </h4>
        <h1 className="text-center text-4xl font-black leading-snug">{postData.title}</h1>
        <Badge className="capitalize">{postData.tag}</Badge>
        {postData.cover && (
          <div className="relative h-40 w-full">
            <Image
              src={postData.cover}
              alt={postData.title}
              priority={true}
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        )}
      </div>
      <Markdown markdown={postData.content} />
      {headings.length && <TableOfContents headings={headings} />}
    </>
  );
}
