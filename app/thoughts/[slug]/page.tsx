import Markdown from "@/components/Markdown";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

const MOCK_DATA = {
  id: 1,
  slug: 'create-and-animate-beautiful-patterns',
  title: 'Create and animate beautiful patterns',
  created_at: '12 oct 2024',
  tag: 'Design',
  content: `
Lorem markdownum et? As winds add to the light of the illustrious Cassiope: what walls
and Caucasus dreams, whom! Men I do not know, who, admitting, gather the submerged: none. Nor yet he himself, Prochytes' breezes, a suppliant, to me so often?

## And the mild ones for toasted bread were not warned by the tree

The wall sustains the simultaneous capture, I remain embraced by the lost: a number of sorrows leaves
to be bent by the right hand. *The same future*!

eg:
\`FetchAPI\`

## However, Tinus may order such things and treaties

Fear of death but the nymphs and the rope, nor Nonacria and similar voices, fearing to destroy the sea;
of the mane. It was right what the soul was recklessly deceived.
\`\`\`Markdown.tsx
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github-dark.css';

import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

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
    className='prose dark:prose-invert dark:prose-code:selection:bg-primary prose-code:!bg-transparent prose-pre:p-0'
    dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
  ></article>
}

export default Markdown;
\`\`\`
## They were beaten by the name of the actress, Phaedimus adds another

Future delayed and with both crater his cheeks forced! They shook with the mouth and shoulders
with food and the milk-giving men, and moved the heavy trumpets and the leaders.

1. Those to you or
2. Argos and the stars for the man of Taenarius therefore
3. Plays above the great and how the sky
4. Jove Idmon that I may be conquered
5. The message gives the way to mint with bending and mind
6. Further it shines

I avenge the lifted human, the deed, with the blood of the field; none indeed of the wind. He may take death.

The sea, with covered horses and flames in the arms within the diet, wound? In Venus
seized and dwelt, his former author, both **bitten by shame**, soothes
the delay of horses, said delay [Gangetica sort](http://lunares.org/lupis) arrow.
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
