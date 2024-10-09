import { truncate } from '@/app/_lib/utils';

describe('truncate char', () => {
  const exampleStr = 'Step into Moonlitgrace';

  it('shouldn"t truncate char shorter than n', () => {
    expect(truncate(exampleStr, 25)).toBe(exampleStr);
  });

  it('shouldn truncate char larger than n', () => {
    expect(truncate(exampleStr, 20)).toBe('Step into Moonlit...');
  });
});
