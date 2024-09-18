import { zodNonEmptyString } from '@/lib/zod';
import { z } from 'zod';
export const AdminBlogSchema = z.object({
  id: z.number().optional(),
  title: zodNonEmptyString('title'),
  tag: zodNonEmptyString('tag'),
  content: zodNonEmptyString('content'),
  cover: z.string().nullable().optional(),
  is_draft: z.boolean(),
});

export type AdminBlogData = z.infer<typeof AdminBlogSchema>;

export type AdminBlogFormState =
  | {
      errors?: {
        title?: string[];
        tag?: string[];
        content?: string[];
      };
      message?: string;
    }
  | undefined;
