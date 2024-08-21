import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"
import Link from "next/link"

const MOCK_DATA = [
  {
    id: 1,
    created_at: '12 oct 2024',
    title: 'Create and animate beautiful patterns',
    tag: 'Design',
    slug: 'create-and-animate-beautiful-patterns',
  },
  {
    id: 2,
    created_at: '24 oct 2024',
    title: 'Magic git commands',
    tag: 'Git',
    slug: 'magic-git-commands',
  },
]

export const metadata: Metadata = {
  title: 'Thoughts. | moonlitspace',
  description: 'my graceful thoughts',
}

export default function Thoughts() {
  return (
    <main className="w-full flex flex-col gap-10 mt-10">
      <h2 className="text-3xl font-bold">Thoughts.</h2>
      <div className="flex flex-col gap-5">
        {MOCK_DATA.map((item) => (
          <div key={item.id} className="flex flex-col">
            <span className="text-xs uppercase font-bold text-muted-foreground">{item.created_at}</span>
            <div className="flex items-center gap-2">
              <Link href={`/thoughts/${item.slug}`} className="text-lg relative before:bg-transparent before:absolute before:bottom-1 before:w-full before:h-0.5 before:duration-200 hover:before:bottom-0 hover:before:bg-primary">
                {item.title}
              </Link>
              <Separator className="flex-1" />
              <Badge>{item.tag}</Badge>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
