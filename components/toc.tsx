import { escapeText } from '@/lib/utils';

const TableOfContents = ({ headings }: { headings: string[] }) => {
  return (
    <div className="fixed right-10 top-1/2 hidden -translate-y-1/2 flex-col gap-4 rounded-2xl border p-5 md:flex">
      <h3 className="font-bold">Table of Contents</h3>
      <div className="flex flex-col gap-1">
        {headings.map((heading) => (
          <a className="font-medium underline" href={`#${escapeText(heading)}`}>
            <span className="text-primary">#.&nbsp;</span>
            {heading}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
