import { stripHtmlTags } from '@/lib/utils';
import { marked, Tokens } from 'marked';

export function extractParagraphs(markdown: string) {
  const tokens = marked.lexer(markdown);
  const paragraphs = tokens
    .filter((token) => token.type === 'paragraph')
    .map((token) => {
      const rawText = marked.parseInline((token as Tokens.Paragraph).text, { async: false });
      return stripHtmlTags(rawText);
    });
  return paragraphs.join(' ');
}

export function truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n - 3) + '...' : str;
}
