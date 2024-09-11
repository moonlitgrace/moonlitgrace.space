import { posts, PostSelect } from '@/db/schema';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AdminBlogDeleteButton from '@/app/_components/_admin/BlogDeleteButton';
import { desc } from 'drizzle-orm';
import { db } from '@/db';
import PencilIcon from '@/components/icons/pencil';
import { PlusIcon } from '@/components/icons/plus';

export default async function AdminBlogPage() {
  const postsData: Omit<PostSelect, 'content' | 'cover' | 'createdAt'>[] = await db
    .select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      tag: posts.tag,
    })
    .from(posts)
    .orderBy(desc(posts.createdAt));

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Admin Blog
          <span className="text-primary">.</span>
        </h2>
        <Link href="/admin/blog/new">
          <Button size="sm" className="gap-2">
            <PlusIcon className="size-4" />
            New Post
          </Button>
        </Link>
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
            <TableRow key={post.id}>
              <TableCell className="font-bold text-primary">{post.id}.</TableCell>
              <TableCell className="font-medium">
                <Link href={`/blog/${post.slug}`} className="underline">
                  {post.title}
                </Link>
              </TableCell>
              <TableCell className="capitalize">{post.tag}</TableCell>
              <TableCell className="flex justify-end gap-2">
                <Link href={`/admin/blog/${post.slug}`}>
                  <Button size="icon" className="size-8" variant="ghost">
                    <PencilIcon variant="outline" className="size-4" />
                  </Button>
                </Link>
                <AdminBlogDeleteButton postId={post.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
