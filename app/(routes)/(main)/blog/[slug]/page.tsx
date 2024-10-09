import { PostSelect } from '@/db/schema';
import { formatDate } from '@/lib/utils';
import { marked, Tokens } from 'marked';
import { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Markdown from '@/components/markdown';
import TableOfContents from '@/app/_components/_main/table-of-contents';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/blog/${params.slug}`);

  if (res.status === 404)
    return {
      title: 'Post not found',
      description: 'The requested post could not be found.',
      openGraph: {
        title: 'Post not found',
        description: 'The requested post could not be found.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/blog/' + params.slug,
        siteName: 'Moonlitgrace',
        locale: 'en_US',
        type: 'article',
      },
    };

  const post: Omit<PostSelect, 'id' | 'draft' | 'content'> = await res
    .json()
    .then((res) => res.data);
  const { title, description, cover, slug, tag, createdAt } = post;

  // og: dynamic image
  const ogImgUrl = new URL(process.env.NEXT_PUBLIC_APP_URL + '/api/og');
  ogImgUrl.searchParams.set('title', title);
  ogImgUrl.searchParams.set('description', description);
  ogImgUrl.searchParams.set('tag', tag);
  ogImgUrl.searchParams.set('createdAt', formatDate(createdAt));
  if (cover) ogImgUrl.searchParams.set('cover', cover);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: {
        url: ogImgUrl.toString(),
        width: 1200,
        height: 630,
        alt: title,
      },
      url: process.env.NEXT_PUBLIC_APP_URL + '/blog/' + slug,
      siteName: 'Moonlitgrace',
      locale: 'en_US',
      type: 'article',
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post: PostSelect = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/blog/${params.slug}`)
    .then((res) => {
      if (res.status === 404) notFound();
      return res.json();
    })
    .then((res) => res.data);

  const lexer = new marked.Lexer();
  const tokens = lexer.lex(post.content);
  const headings = tokens
    .filter((token) => token.type === 'heading')
    .map((token) => (token as Tokens.Heading).text);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-5">
        <h4 className="text-xs font-bold uppercase text-muted-foreground">
          {formatDate(post.createdAt)}
        </h4>
        <h1 className="text-center text-4xl font-black leading-snug">{post.title}</h1>
        <Badge className="capitalize">{post.tag}</Badge>
        {post.cover && (
          <Image
            src={post.cover}
            alt={post.title}
            priority={true}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="rounded-2xl"
          />
        )}
      </div>
      <Markdown markdown={post.content} />
      {headings.length > 0 && <TableOfContents headings={headings} />}
    </>
  );
}
