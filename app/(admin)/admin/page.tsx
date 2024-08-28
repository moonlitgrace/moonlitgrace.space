import { db } from '@/db';
import { posts } from '@/db/schema';
import { count } from 'drizzle-orm';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

export default async function AdminPage() {
  const blogCount = (await db.select({ count: count() }).from(posts))[0];

  const countObj = [
    {
      name: 'Blog',
      count: blogCount.count,
      href: '/admin/blog',
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold">
        Admin
        <span className="text-primary">.</span>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countObj.map((item, idx) => (
            <TableRow>
              <TableCell>{idx + 1}</TableCell>
              <TableCell className="font-medium">
                <Link href={item.href} className="underline">
                  {item.name}
                </Link>
              </TableCell>
              <TableCell>{item.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
