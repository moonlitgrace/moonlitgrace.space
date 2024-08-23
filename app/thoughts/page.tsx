import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { db } from "@/db"
import { type PostSelect, posts } from "@/db/schema"
import { formatDate } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Thoughts. | moonlitspace',
  description: 'my graceful thoughts',
}

export default async function Thoughts() {
  const postsData: Omit<PostSelect, 'content'>[] = await db.select({
    id: posts.id,
    title: posts.title,
    slug: posts.slug,
    tag: posts.tag,
    createdAt: posts.createdAt
  }).from(posts);

  return (
    <>
      <h2 className="text-3xl font-bold">Thoughts<span className="text-primary">.</span></h2>
      <div className="flex flex-col gap-5">
        {postsData.map((item) => (
          <div key={item.id} className="flex flex-col">
            <span className="text-xs uppercase font-bold text-muted-foreground">{formatDate(item.createdAt)}</span>
            <div className="flex items-center gap-2">
              <Link href={`/thoughts/${item.slug}`} className="text-lg relative before:bg-transparent before:absolute before:bottom-1 before:w-full before:h-0.5 before:duration-200 hover:before:bottom-0 hover:before:bg-primary">
                {item.title}
              </Link>
              <Separator className="flex-1" />
              <Badge className="capitalize">{item.tag}</Badge>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
