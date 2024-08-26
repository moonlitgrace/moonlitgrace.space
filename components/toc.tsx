'use client';

import { escapeText } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from './ui/button';
import ListIcon from './icons/list';
import { useState } from 'react';

const TableOfContents = ({ headings }: { headings: string[] }) => {
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <div className="fixed right-4 top-1/2 hidden -translate-y-1/2 rounded-2xl border bg-background p-2 md:flex">
      <Popover onOpenChange={setTocOpen} open={tocOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={tocOpen ? 'secondary' : 'ghost'}
            className={'grid aspect-square size-11 place-items-center rounded-xl'}
          >
            <ListIcon className="size-5" variant={tocOpen ? 'solid' : 'outline'} />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          sideOffset={20}
          side="left"
          className="w-max flex-col gap-4 rounded-2xl border bg-background p-5 md:flex"
        >
          <h3 className="font-bold">Table of Contents</h3>
          <div className="flex flex-col gap-1">
            {headings.map((heading) => (
              <a className="w-max font-medium underline" href={`#${escapeText(heading)}`}>
                <span className="text-primary">#.&nbsp;</span>
                {heading}
              </a>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TableOfContents;
