import { escapeText } from "@/lib/utils";

const TableOfContents = ({ headings }: { headings: string[] }) => {
  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 p-5 border rounded-2xl">
      <h3 className="font-bold">Table of Contents</h3>
      <div className="flex flex-col gap-1">
        {headings.map((heading) => (
          <a className="font-medium underline" href={`#${escapeText(heading)}`}>
            <span className="text-primary">#.&nbsp;</span>{heading}
          </a>
        ))}
      </div>
    </div>
  )
}

export default TableOfContents;
