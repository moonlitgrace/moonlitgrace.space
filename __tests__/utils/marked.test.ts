import { extractParagraphs } from "@/utils/marked";

describe('extract paragraphs only from markdown', () => {
  it('should return paragraph', () => {
    const mockMarkdown = `
# Moonlitgrace

> WHOAMI

Moonlitgrace is a good bwoy!.`;
    expect(extractParagraphs(mockMarkdown)).toBe('Moonlitgrace is a good bwoy!.');
  });
});
