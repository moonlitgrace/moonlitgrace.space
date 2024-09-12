import dynamic from 'next/dynamic';
import React from 'react';

const DynamicAppBar = dynamic(() => import('@/components/main/AppBar'), {
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
