'use client';

import { Button } from '@/components/ui/button';
import { revalidatePathClient } from '@/helpers/revalidate';
import { useState } from 'react';

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

        revalidatePathClient('/admin/blog');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setPending(false);
    }
  }

  return (
    <Button disabled={pending} variant="destructive" size="sm" onClick={handleDeleteBlog}>
      Delete
    </Button>
  );
}
