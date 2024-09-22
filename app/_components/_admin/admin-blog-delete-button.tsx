'use client';

import { Button } from '@/components/ui/button';
import { revalidatePathClient } from '@/helpers/revalidate-path-client';
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
import SpinnerIcon from '@/components/icons/spinner';

export default function AdminBlogDeleteButton({ postSlug }: { postSlug: string }) {
  const [pending, setPending] = useState(false);

  async function handleDeleteBlog() {
    setPending(true);
    try {
      await fetch('/api/blog/' + postSlug, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      revalidatePathClient();
    } catch (err) {
      console.error(err);
    } finally {
      setPending(false);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={pending} size="icon" className="size-8" variant="destructive">
          {pending ? (
            <SpinnerIcon className="size-5" />
          ) : (
            <TrashIcon variant="outline" className="size-4" />
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete post ({postSlug}) from
            record.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteBlog}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
