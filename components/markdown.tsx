import { Marked, RendererObject, Token } from 'marked';
import { markedHighlight } from 'marked-highlight';
import DOMPurify from 'isomorphic-dompurify';

import hljs from 'highlight.js/lib/core';
import '@/styles/hljs/github-dark.css';
import { escapeText } from '@/lib/utils';
import MarkdownCopyListener from '@/app/_components/_main/markdown-copy-listener';

const languages = {
  plaintext: () => import('highlight.js/lib/languages/plaintext'),
  javascript: () => import('highlight.js/lib/languages/javascript'),
  typescript: () => import('highlight.js/lib/languages/typescript'),
  python: () => import('highlight.js/lib/languages/python'),
  xml: () => import('highlight.js/lib/languages/xml'),
  css: () => import('highlight.js/lib/languages/css'),
  bash: () => import('highlight.js/lib/languages/bash'),
  markdown: () => import('highlight.js/lib/languages/markdown'),
  django: () => import('highlight.js/lib/languages/django'),
  dockerfile: () => import('highlight.js/lib/languages/dockerfile'),
  json: () => import('highlight.js/lib/languages/json'),
  scss: () => import('highlight.js/lib/languages/scss'),
  yaml: () => import('highlight.js/lib/languages/yaml'),
};

async function registerLanguages() {
  for (const [name, loadLanguage] of Object.entries(languages)) {
    const language = (await loadLanguage()).default;
    hljs.registerLanguage(name, language);
  }
}

registerLanguages();

const Markdown = ({ markdown }: { markdown: string }) => {
  const renderer: RendererObject = {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const escapedText = escapeText(text);

      return `<h${depth}>
        <a name="${escapedText}" class="no-underline text-primary" href="#${escapedText}">#.</a>
        ${text}
      </h${depth}>`;
    },
    code({ text, lang }) {
      return `<pre><div class='flex items-center justify-between pb-3 text-xs'><span>${lang}</span><button type='button' class='copy-code-btn'>Copy</button></div><div class='flex-1 overflow-x-scroll scrollbar-thin'><code>${text}</code></div></pre>`;
    },
    link(args) {
      const link = marked.Renderer.prototype.link.call(this, args);
      return link.replace('<a', '<a target="_blank" rel="noreferrer"');
    },
  };

  const walkTokens = (token: Token) => {
    if (token.type === 'heading') {
      if (token.depth === 1) token.depth = 2;
    }
  };

  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        let _lang = lang;
        if (lang.includes('.')) _lang = lang.split('.')[1];
        const language = hljs.getLanguage(_lang) ? _lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    }),
    {
      breaks: true,
      gfm: true,
      renderer,
      walkTokens,
    },
  );

  return (
    <>
      <article
        className="prose dark:prose-invert prose-pre:rounded-2xl prose-pre:bg-secondary/25"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked.parse(markdown) as string, {
            USE_PROFILES: { html: true },
          }),
        }}
      ></article>
      <MarkdownCopyListener />
    </>
  );
};

export default Markdown;
