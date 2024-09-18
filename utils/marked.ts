import { marked, Tokens } from "marked";
import { stripHtmlTags } from "./html";

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

