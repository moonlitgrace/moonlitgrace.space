import SpinnerIcon from '@/components/icons/spinner';
import { Textarea } from '@/components/ui/textarea';
import { validateFile } from '@/lib/utils';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

interface Props {
  content: string | undefined;
  setContent: Dispatch<SetStateAction<string | undefined>>;
}

const MarkdownEditor = ({ content, setContent }: Props) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = (file: File) => {
    try {
      setUploading(true);
      console.log(file);
      setTimeout(() => setUploading(false), 2000);
    } catch (err) {
      console.error('Error while uploading markdown file => ', err);
    }
  };

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] as File;
    if (validateFile(file)) handleUpload(file);
  }

  return (
    <div className="flex flex-col gap-2">
      <Textarea
        className="h-40"
        placeholder="Type content here..."
        id="content"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex w-full items-center rounded-xl border border-dashed bg-muted/50 px-2 py-1">
        <input
          hidden
          type="file"
          accept="image/*"
          id="markdown-img-upload"
          onChange={handleFileChange}
        />
        <label
          htmlFor="markdown-img-upload"
          className="cursor-pointer text-xs text-muted-foreground"
        >
          {uploading ? (
            <div className="flex items-center gap-2">
              <SpinnerIcon className="size-4" />
              Uploading file...
            </div>
          ) : (
            'Attach files by dragging & dropping, selecting or pasting them.'
          )}
        </label>
      </div>
    </div>
  );
};

export default MarkdownEditor;
