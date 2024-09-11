'use client';

import { Button } from '@/components/ui/button';
import { revalidatePathClient } from '@/helpers/revalidate';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import TrashIcon from '@/components/icons/trash';

export default function AdminBlogDeleteButton({ postId }: { postId: number }) {
  const [pending, setPending] = useState(false);

  async function handleDeleteBlog() {
    setPending(true);
    try {
      const result = confirm(`Sure to delete blog: ${postId}?`);
      if (result) {
        await fetch('/api/blog/', {
          method: 'DELETE',
          body: JSON.stringify({ postId }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        revalidatePathClient();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setPending(false);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" className="size-8" variant="destructive">
          <TrashIcon variant="outline" className="size-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete post (id={postId}) from
            record.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
