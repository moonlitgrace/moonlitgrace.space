import Markdown from "@/components/Markdown";
import { Badge } from "@/components/ui/badge";
import { db } from "@/db";
import { posts, PostSelect } from "@/db/schema";
import { formatTime } from "@/lib/utils";
import { eq } from "drizzle-orm";
import removeMarkdown from "markdown-to-text";
import { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { title, content } = (await db.select({ title: posts.title, content: posts.content }).from(posts).where(eq(posts.slug, params.slug)))[0];
  const description = removeMarkdown(content).slice(0, 100) + '...';

  return {
    title,
    description,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const postData: PostSelect = (await db.select().from(posts).where(eq(posts.slug, params.slug)))[0];

  return (
    <>
      <div className="w-full flex flex-col items-center gap-5">
        <h4 className="text-xs uppercase text-muted-foreground font-bold">{formatTime(postData.createdAt)}</h4>
        <h1 className="text-5xl font-bold text-center leading-snug">{postData.title}</h1>
        <Badge className="capitalize">{postData.tag}</Badge>
      </div>
      <Markdown markdown={postData.content} />
    </>
  )
}
