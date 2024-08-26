'use client'

import { escapeText } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button';
import ListIcon from './icons/list';

const TableOfContents = ({ headings }: { headings: string[] }) => {
  return (
    <div className='fixed right-4 top-1/2 hidden md:flex -translate-y-1/2 border bg-background p-2 rounded-2xl'>
      <Popover onOpenChange={(open) => console.log(open)}>
        <PopoverTrigger asChild>
          <Button variant='ghost' className={'grid aspect-square size-11 place-items-center rounded-xl'}>
            <ListIcon className='size-5' variant='outline' />
          </Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={20} side='left' className="flex-col bg-background gap-4 rounded-2xl border p-5 w-max md:flex">
          <h3 className="font-bold">Table of Contents</h3>
          <div className="flex flex-col gap-1">
            {headings.map((heading) => (
              <a className="font-medium underline w-max" href={`#${escapeText(heading)}`}>
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
