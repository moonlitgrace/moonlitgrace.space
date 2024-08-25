import React from 'react';

export default function WritingsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="my-10 mb-40 flex w-full flex-col gap-10">{children}</main>;
}
