import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull(),
  tag: text('tag').notNull(),
  cover: text('cover'),
  is_draft: boolean('is_draft').default(false),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type PostSelect = typeof posts.$inferSelect;
