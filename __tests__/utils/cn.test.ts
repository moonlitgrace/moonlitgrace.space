import { cn } from '@/utils/cn';

describe('check classnames (twMerge)', () => {
  it('normal checks', () => {
    expect(cn('w-full', 'h-full')).toBe('w-full h-full');
    expect(cn('md:max-h-[1vw]', 'md:hover:max-h-[10vw]')).toBe(
      'md:max-h-[1vw] md:hover:max-h-[10vw]',
    );
  });

  it('whitespace check', () => {
    expect(cn('                           w-full', 'h-full                                 ')).toBe(
      'w-full h-full',
    );
  });
});
