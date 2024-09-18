import { formatDate } from '@/lib/utils';

test('check formated date', () => {
  const date = new Date('2023-03-11T02:37:40.790Z');
  expect(formatDate(date)).toBe('Mar 11, 2023');
});
