import { Marked } from 'marked';

const Markdown = ({ markdown }: { markdown: string }) => {
  const marked = new Marked({
    breaks: true,
    gfm: true,
  })

  return <article
    className='prose dark:prose-invert'
    dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
  ></article>
}

export default Markdown;
