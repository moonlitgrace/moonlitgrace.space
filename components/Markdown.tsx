import { Marked, RendererObject } from 'marked';
import { markedHighlight } from 'marked-highlight';

import hljs from 'highlight.js/lib/core';
import '@/styles/highlight.js/github-dark.css';

const languages = {
  plaintext: () => import('highlight.js/lib/languages/plaintext'),
  javascript: () => import('highlight.js/lib/languages/javascript'),
  typescript: () => import('highlight.js/lib/languages/typescript'),
  python: () => import('highlight.js/lib/languages/python'),
  xml: () => import('highlight.js/lib/languages/xml'),
  css: () => import('highlight.js/lib/languages/css'),
}

async function registerLanguages() {
  for (const [name, loadLanguage] of Object.entries(languages)) {
    const language = (await loadLanguage()).default;
    hljs.registerLanguage(name, language)
  }
}

registerLanguages();

const Markdown = ({ markdown }: { markdown: string }) => {
  const renderer: RendererObject = {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

      return `<h${depth}>
        <a name="${escapedText}" class="no-underline text-primary" href="#${escapedText}">#.</a>
        ${text}
      </h${depth}>`;
    },
    code({ text, lang }) {
      return `<pre><div class='flex items-center justify-between pb-3 text-xs'><span>${lang}</span><button onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.textContent).then(() => { this.innerText = 'Copied'; setTimeout(() => { this.innerText = 'Copy' }, 2000); })">Copy</button></div><code>${text}</code></pre>`;
    },
  };

  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        let _lang = lang;
        if (lang.includes('.')) _lang = lang.split('.')[1]
        const language = hljs.getLanguage(_lang) ? _lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    }),
    {
      breaks: true,
      gfm: true,
      renderer,
    },
  )

  return <article
    className='prose dark:prose-invert prose-pre:bg-secondary/25 prose-pre:rounded-2xl'
    dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
  ></article>
}

export default Markdown;
