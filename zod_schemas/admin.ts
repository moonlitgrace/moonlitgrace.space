import { zodNonEmptyString } from "@/lib/zod";
import { z } from "zod";

export const AdminBlogSchema = z.object({
  update: z.boolean(),
  title: zodNonEmptyString('title'),
  tag: zodNonEmptyString('tag'),
  content: zodNonEmptyString('content'),
});

export type AdminBlogFormState =
  | {
    errors?: {
      title?: string[];
      tag?: string[];
      content?: string[];
    };
    message?: string;
  } | undefined;
