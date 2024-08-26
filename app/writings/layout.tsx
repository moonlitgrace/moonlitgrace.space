import React from 'react';

export default function WritingsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="mb-40 mt-10 flex w-full flex-col gap-10 md:mb-10">{children}</main>;
}
