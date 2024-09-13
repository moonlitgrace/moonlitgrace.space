import dynamic from 'next/dynamic';
import React from 'react';

const DynamicAppBar = dynamic(() => import('@/app/_components/_main/app-bar'), {
  ssr: false,
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <DynamicAppBar />
    </>
  );
}
