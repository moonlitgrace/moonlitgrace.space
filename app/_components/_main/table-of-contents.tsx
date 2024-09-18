'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Chevrons from '@/components/icons/chevrons';
import { cn } from '@/utils/cn';
import { escapeText } from '@/utils/html';

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
            <Chevrons
              className={cn(
                'size-5 transition-transform duration-300',
                tocOpen ? 'rotate-90 scale-x-[-1]' : '-rotate-90 scale-x-[1]',
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          sideOffset={20}
          side="left"
          className="hidden w-max flex-col gap-4 rounded-2xl border bg-background p-5 md:flex"
        >
          <h3 className="font-bold">Table of Contents</h3>
          <div className="flex flex-col gap-1">
            {headings.map((heading, idx) => (
              <a key={idx} className="w-max font-medium underline" href={`#${escapeText(heading)}`}>
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
