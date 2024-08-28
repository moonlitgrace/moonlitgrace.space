import { db } from '@/db';
import { posts, PostSelect } from '@/db/schema';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default async function AdminBlogPage() {
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
      <div className='flex items-center justify-between'>
        <h2 className="text-3xl font-bold">
          Admin Blog
          <span className="text-primary">.</span>
        </h2>
        <Button asChild>
          <Link href='/admin/blog/new'>New Post</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Tag</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {postsData.map((post) => (
            <TableRow>
              <TableCell>{post.id}</TableCell>
              <TableCell className='font-medium'><Link href={`/blog/${post.slug}`} className='underline'>{post.title}</Link></TableCell>
              <TableCell><Badge className='capitalize' variant='secondary'>{post.tag}</Badge></TableCell>
              <TableCell className='flex gap-4'>
                <Button size='sm'><Link href={`/admin/blog/${post.slug}`}>Edit</Link></Button>
                <Button variant='destructive' size='sm'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
