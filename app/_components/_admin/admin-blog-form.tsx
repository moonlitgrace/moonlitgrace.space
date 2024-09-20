'use client';

import adminBlogSubmit from '@/actions/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Markdown from '@/components/markdown';
import { Checkbox } from '@/components/ui/checkbox';
import { revalidatePathClient } from '@/helpers/revalidate-path-client';

type Props = Partial<{
  id: number;
  title: string;
  tag: string;
  content: string;
  cover: string | null;
  draft: boolean;
}>;

export default function AdminBlogForm({ id, title, tag, content, cover, draft = false }: Props) {
  const [state, action] = useFormState(adminBlogSubmit, undefined);
  const [contentState, setContentState] = useState(content);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const clearImage = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }

  }
  useEffect(() => {
    if (state?.message === 'success') {
      revalidatePathClient();
      router.push('/admin/blog');
    }
  }, [state, router]);

  return (
    <>
      <h2 className="text-3xl font-bold">
        New Post
        <span className="text-primary">.</span>
      </h2>
      <form className="flex flex-col gap-3" action={action}>
        {/* hidden fields */}
        <input type="hidden" name="id" value={id?.toString() || ''} />
        {/* This will send if submit form with preview tab open */}
        {/* because then there will be no input with name attr */}
        <input type="hidden" name="content" value={contentState} />

        <div className="grid w-full items-center gap-1.5">
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter post title..."
            defaultValue={title}
          />
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="grid w-full items-center gap-1.5 relative">
            <Input ref={inputRef} id="cover" type="file" name="cover" />
            <p className="text-sm text-muted-foreground">{cover ?? 'No cover provided'}</p>
            <div className="absolute top-0 right-0 w-max items-center gap-1.5">
              <Button variant="ghost" onClick={() => clearImage()} ><PlusIcon className='text-foreground size-5 rotate-45'  /></Button>
            </div>
          </div>

          <div className="grid w-max items-center gap-1.5">
            <Input
              type="text"
              id="tag"
              name="tag"
              placeholder="Enter post tag..."
              defaultValue={tag}
            />
            <p className="text-sm text-muted-foreground">{tag}</p>
          </div>
        </div>
        <div className="grid w-full gap-1.5">
          <Tabs defaultValue="content">
            <TabsList>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="content">
              <Textarea
                className="h-40"
                placeholder="Type content here..."
                id="content"
                name="content"
                value={contentState}
                onChange={(e) => setContentState(e.target.value)}
              />
            </TabsContent>
            <TabsContent value="preview">
              <div className="rounded-md border border-input p-3">
                {contentState ? (
                  <Markdown markdown={contentState} />
                ) : (
                  <span className="text-sm">Nothing to preview...</span>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <Checkbox name="draft" id="draft" defaultChecked={draft} />
            <label
              htmlFor="draft"
              className="whitespace-nowrap text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Save as Draft
            </label>
          </div>
          <SubmitButton />
        </div>
      </form>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
}
