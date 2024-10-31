import AppBar from '@/app/_components/_main/app-bar';
import React from 'react';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <AppBar />
    </>
  );
}
