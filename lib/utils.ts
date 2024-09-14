import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { marked, Tokens } from 'marked';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: Date) {
  const date = new Date(dateStr).toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return date;
}

export function escapeText(text: string) {
  return text.toLowerCase().replace(/[^\w]+/g, '-');
}

export function validateFile(file: File) {
  return file instanceof File && file.name !== '' && file.size > 0;
}

export function extractParagraphs(markdown: string) {
  const tokens = marked.lexer(markdown);
  const paragraphs = tokens
    .filter((token) => token.type === 'paragraph')
    .map((token) => (token as Tokens.Paragraph).text);
  return paragraphs.join(' ');
}

export function truncate(str: string, n: number) {
  return (str.length > n) ? str.slice(0, n - 3) + '...' : str;
}
