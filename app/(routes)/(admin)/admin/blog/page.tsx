import { PostSelect } from '@/db/schema';
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
import AdminBlogDeleteButton from '@/app/_components/_admin/admin-blog-delete-button';
import PencilIcon from '@/components/icons/pencil';
import PlusIcon from '@/components/icons/plus';

export default async function AdminBlogPage() {
  const posts: Omit<PostSelect, 'content' | 'cover'>[] = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blog`,
  )
    .then((res) => res.json())
    .then((res) => res.data);

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
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-bold text-primary">{post.id}.</TableCell>
              <TableCell className="font-medium">
                <Link href={`/blog/${post.slug}`} className="underline">
                  {post.title}
                </Link>
              </TableCell>
              <TableCell className="capitalize">{post.tag}</TableCell>
              <TableCell className="text-muted-foreground">{post.draft && '(draft)'}</TableCell>
              <TableCell className="flex justify-end gap-2">
                <Link href={`/admin/blog/${post.slug}`}>
                  <Button size="icon" className="size-8" variant="ghost">
                    <PencilIcon variant="outline" className="size-4" />
                  </Button>
                </Link>
                <AdminBlogDeleteButton postSlug={post.slug} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
