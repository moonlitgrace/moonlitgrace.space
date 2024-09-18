import { zodNonEmptyString } from '@/helpers/zod';
import { z } from 'zod';

export const AdminBlogSchema = z.object({
  id: z.number().optional(),
  title: zodNonEmptyString('title'),
  tag: zodNonEmptyString('tag'),
  content: zodNonEmptyString('content'),
  cover: z.string().nullable().optional(),
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
