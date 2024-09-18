export function truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n - 3) + '...' : str;
}

