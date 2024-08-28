'use client';

import adminBlogSubmit from '@/actions/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useFormState, useFormStatus } from 'react-dom';

type Props = {
  id?: number;
  title?: string;
  tag?: string;
  content?: string;
  cover?: string | null;
};

export default function AdminBlogForm({ id, title = '', tag = '', content = '', cover }: Props) {
  const [state, action] = useFormState(adminBlogSubmit, undefined);

  return (
    <form className="flex flex-col gap-5" action={action}>
      {/* hidden fields */}
      <input type="hidden" name="id" value={id?.toString() || ''} />

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" name="title" placeholder="Title" defaultValue={title} />
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <div className="flex items-start gap-4">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="cover">Cover</Label>
          <Input id="cover" type="file" name="cover" />
          <p className="text-sm text-muted-foreground">{cover ?? 'No cover provided'}</p>
        </div>
        <div className="grid w-max items-center gap-2">
          <Label htmlFor="tag">Tag</Label>
          <Input type="text" id="tag" name="tag" placeholder="Tag" defaultValue={tag} />
          <p className="text-sm text-muted-foreground">{tag}</p>
        </div>
      </div>
      <div className="grid w-full gap-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          className="h-60"
          placeholder="Type content here."
          id="content"
          name="content"
          defaultValue={content}
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</Button>;
}
