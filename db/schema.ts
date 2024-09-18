import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull(),
  tag: text('tag').notNull(),
  cover: text('cover'),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  draft: boolean("draft").notNull().default(false),
});

export type PostSelect = typeof posts.$inferSelect;
