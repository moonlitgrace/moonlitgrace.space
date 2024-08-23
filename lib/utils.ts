import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: Date) {
  const date = new Date(dateStr).toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return date;
}
