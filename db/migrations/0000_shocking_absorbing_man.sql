CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"tag" text NOT NULL,
	"cover" text,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
