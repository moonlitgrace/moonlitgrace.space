'use client';

import IsometricHandler from '@/components/isometric-handler';
import Svg404 from '@/assets/svgs/404.svg';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import PencilIcon from '@/components/icons/pencil';
import Link from 'next/link';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="flex size-full flex-col justify-center gap-5 self-center">
      <IsometricHandler svg={<Svg404 />} />
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">
          Page not found
          <span className="text-primary">.</span>
        </h2>
        <p className="text-muted-foreground">Requested page could not be found: {pathname}</p>
        <Link href="/blog">
          <Button className="w-max gap-2">
            See all Posts <PencilIcon variant="solid" className="size-3" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
