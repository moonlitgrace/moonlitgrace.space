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
Lorem markdownum et? Cum adde ventos illum facta clara Cassiope: quod moenia
membrisque Caucasus somnus, quem! Virorum me non, qui, admisso est colligit mersa: ulla. Nec dum et ipse, Prochytenque auras supplex me totiens?

## Et mitia pro tostae nec monuere arbore

Muro sustinet simul capiunt permaneo amissi amplecti: numero luctus relinquit
curvari dextraque. *Eosdem futuri*!

eg:
\`FetchAPI\`

## Tinus illa tamen talia iubeatve sortes foedera

Pavor nece sed nymphae tu rudente, neque Nonacria et voces similis pontum
abolere metuens; iubae. Fuit dextra de quid animam temerarius deceptus.
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
## Ferebant nomine illam paelicis phaedimus adicit altera

Futura tardatus et utroque cratere suos coactus genas! Quatiebant ore umeris
cibos lactantiaque viri, fert et gravem tubas ducibusque ducentem dimovit.

1. Illi vobis aut
2. Argosque di tu sidera homini Taenarius ergo
3. Ludit super magna et quam polus
4. Iovis Idmon ut vincar
5. Nuntia dare viam mentae curvamine et mente
6. Ulterius fulget

Ulciscor levata humana, factum, cruore agri; ulla quidem venti. Capiat morte.

Pontum pellitis equus oculisque flammae arma intra victu,; vulnere? In venere
raptamque habitabat suos priora auctor sua **uterque momordi pudore**, mulcet
mora equos dixerat mora [Gangetica sorte](http://lunares.org/lupis) sagitta.`
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
        <h1 className="text-5xl font-bold text-center leading-tight">{data.title}</h1>
        <Badge>{data.tag}</Badge>
      </div>
      <Markdown markdown={data.content} />
    </>
  )
}
