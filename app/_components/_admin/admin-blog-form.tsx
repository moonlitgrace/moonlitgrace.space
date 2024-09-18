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

type Props = {
  id?: number;
  title?: string;
  tag?: string;
  content?: string;
  cover?: string | null;
  is_draft?: boolean;
};

export default function AdminBlogForm({ id, title = '', tag = '', content = '', cover, is_draft = false }: Props) {
  const [state, action] = useFormState(adminBlogSubmit, undefined);
  const [isDraft, setIsDraft] = useState(is_draft)
  const [contentState, setContentState] = useState(content);
  const formRef = useRef<HTMLFormElement | null>(null);
  const { pending } = useFormStatus();
  const router = useRouter();
  useEffect(() => {
    console.log(is_draft, "draft");
  }, []);
  useEffect(() => {
    if (state?.message === 'success') {
      router.push('/admin/blog');
    }
  }, [state, router]);

  const handleDraftSubmit = async () => {
    await setIsDraft(true)
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };
  const handleSubmit = async () => {
    await setIsDraft(false)
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold">
        New Post
        <span className="text-primary">.</span>
      </h2>
      <form className="flex flex-col gap-3" action={action} ref={formRef}>

        <input type="hidden" name="id" value={id?.toString() || ''} />
        <input type="hidden" name="content" value={contentState} />
        <input type="hidden" name="is_draft" value={isDraft ? 'true' : 'false'} />
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
          <div className="grid w-full items-center gap-1.5">
            <Input id="cover" type="file" name="cover" />
            <p className="text-sm text-muted-foreground">{cover ?? 'No cover provided'}</p>
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
        <div className="flex gap-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="" variant="secondary">
                {pending ? 'Saving...' : 'Draft'}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to save this as a draft?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will save your current progress as a draft. You can edit or publish it later.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="" onClick={handleDraftSubmit}>
                  Save
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <SubmitButton onClick={handleSubmit} isDraft={isDraft} />
        </div>
      </form>
    </>
  );
}

function SubmitButton({ onClick,isDraft }: { onClick: () => void; isDraft: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" onClick={onClick} disabled={pending}>
      {pending && !isDraft ? 'Submitting...' : 'Submit'}
    </Button>
  );
}
