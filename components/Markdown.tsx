import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

import hljs from 'highlight.js/lib/core';
import '@/styles/highlight.js/github-dark.css';

const languages = {
  plaintext: () => import('highlight.js/lib/languages/plaintext'),
  javascript: () => import('highlight.js/lib/languages/javascript'),
  typescript: () => import('highlight.js/lib/languages/typescript'),
  python: () => import('highlight.js/lib/languages/python'),
  xml: () => import('highlight.js/lib/languages/xml'),
}

async function registerLanguages() {
  for (const [name, loadLanguage] of Object.entries(languages)) {
    const language = (await loadLanguage()).default;
    hljs.registerLanguage(name, language)
  }
}

registerLanguages();

const Markdown = ({ markdown }: { markdown: string }) => {
  const marked = new Marked(
    {
      breaks: true,
      gfm: true,
    },
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
    })
  )

  return <article
    className='prose dark:prose-invert prose-pre:bg-secondary/25 prose-pre:rounded-2xl'
    dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
  ></article>
}

export default Markdown;
