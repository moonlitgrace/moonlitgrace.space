'use client';
import React, { useEffect, useRef } from 'react';

interface Props {
  svg: React.ReactNode;
}

const IsometricHandler = ({ svg }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const blocks = containerRef.current?.querySelectorAll('g[id^="block"]');

    const handleBlockHover = (e: Event) => {
      const target = e.currentTarget as SVGElement;
      if (target) {
        target.classList.add('transition-transform');
        target.classList.toggle('transform');
        target.classList.toggle('-translate-y-2');
        target.classList.toggle('-translate-x-1');
      }
    };

    blocks?.forEach((block) => {
      block.addEventListener('mouseenter', handleBlockHover);
    });

    return () => {
      blocks?.forEach((block) => {
        block.removeEventListener('mouseenter', handleBlockHover);
      });
    };
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="w-full [&>svg]:overflow-visible"
    >
      {svg}
    </div>
  );
};

export default IsometricHandler;
