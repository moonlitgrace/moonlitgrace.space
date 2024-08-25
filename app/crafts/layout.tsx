import React from 'react';

export default function CraftsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="mb-40 mt-10 flex w-full flex-col gap-10">{children}</main>;
}

