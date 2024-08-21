import React from "react";

export default function ThoughtsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="w-full flex flex-col gap-10 mt-10">
    {children}
  </main>
}
