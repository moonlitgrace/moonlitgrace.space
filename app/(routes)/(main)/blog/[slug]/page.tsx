import { db } from '@/db';
import { posts, PostSelect } from '@/db/schema';
import { extractParagraphs, formatDate, truncate } from '@/lib/utils';
import { eq } from 'drizzle-orm';
import { marked, Tokens } from 'marked';
import { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Markdown from '@/components/markdown';
import TableOfContents from '@/app/_components/_main/table-of-contents';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { title, content, cover, slug } = (
    await db
      .select({ title: posts.title, content: posts.content, cover: posts.cover, slug: posts.slug })
      .from(posts)
      .where(eq(posts.slug, params.slug))
  )[0];
  const description = truncate(extractParagraphs(content), 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(cover && {
        images: {
          url: cover,
        },
      }),
      url: process.env.NEXT_PUBLIC_APP_URL + '/blog/' + slug,
      siteName: 'Moonlitgrace',
      locale: 'en_US',
      type: 'article',
    }
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
