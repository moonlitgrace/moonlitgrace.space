import { Separator } from '@/components/ui/separator';
import { TooltipContent } from '@/components/ui/tooltip';

export const ResponsiveTooltipContent = ({ content }: { content: string }) => {
  return (
    <>
      <TooltipContent className="hidden md:flex" sideOffset={15} side="right">
        <p>{content}</p>
      </TooltipContent>
      <TooltipContent className="md:hidden" sideOffset={15} side="top">
        <p>{content}</p>
      </TooltipContent>
    </>
  );
};

export const ResponsiveSeparator = () => {
  return (
    <>
      <Separator orientation="horizontal" className="hidden h-px w-1/2 md:flex" />
      <Separator orientation="vertical" className="h-5 md:hidden" />
    </>
  );
};
