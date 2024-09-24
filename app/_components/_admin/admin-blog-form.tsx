'use client';

import adminBlogSubmit from '@/actions/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef, ChangeEvent } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Markdown from '@/components/markdown';
import { Checkbox } from '@/components/ui/checkbox';
import { revalidatePathClient } from '@/helpers/revalidate-path-client';
import PlusIcon from '@/components/icons/plus';
import MarkdownEditor from '@/app/_components/_admin/markdown-editor';

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
  const [showCoverClearBtn, setShowCoverClearBtn] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  function handleClearImage() {
    if (!inputRef.current) return;
    inputRef.current.value = '';
    setShowCoverClearBtn(false);
  }

  function handleCoverFileChange(event: ChangeEvent<HTMLInputElement>) {
    setShowCoverClearBtn((event.target.files?.length as number) > 0);
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

        <div className="flex w-full flex-col gap-1">
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
          <div className="flex w-full flex-col gap-1">
            <div className="relative flex items-center">
              <Input
                ref={inputRef}
                id="cover"
                type="file"
                name="cover"
                onChange={handleCoverFileChange}
              />
              <Button
                type="button"
                className="absolute right-1.5 size-7"
                variant="secondary"
                size="icon"
                onClick={handleClearImage}
                disabled={!showCoverClearBtn}
              >
                <PlusIcon className="size-5 rotate-45 text-foreground" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{cover ?? 'No cover provided'}</p>
          </div>

          <div className="flex w-max flex-col items-center gap-1">
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
        <Tabs defaultValue="content" className="w-full">
          <TabsList>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <MarkdownEditor content={contentState} setContent={setContentState} />
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
