import Markdown from "@/components/Markdown";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

const MOCK_DATA = {
  id: 1,
  slug: 'create-and-animate-beautiful-patterns',
  title: 'Introduction to Markdown',
  created_at: '12 oct 2024',
  tag: 'Design',
  content: `
# Markdown Guide

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. It is commonly used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Basics

- **Bold** text
- *Italic* text
- [Link](https://example.com)
- \`Inline code\`

\`\`\`js
console.log('Code block');
\`\`\`
`
}

export const metadata: Metadata = {
  title: `${MOCK_DATA.title}. | moonlitspace`,
  description: `Lorem markdownum et? Cum adde ventos illum facta clara Cassiope: quod moenia
membrisque Caucasus somnus, quem! Virorum me non, qui, admisso est colligit`
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = MOCK_DATA;

  return (
    <>
      <div className="w-full flex flex-col items-center gap-5">
        <h4 className="text-xs uppercase text-muted-foreground font-bold">{data.created_at}</h4>
        <h1 className="text-5xl font-bold text-center leading-snug">{data.title}</h1>
        <Badge>{data.tag}</Badge>
      </div>
      <Markdown markdown={data.content} />
    </>
  )
}
