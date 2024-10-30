import AdminBar from '@/app/_components/_admin/admin-bar';
import React from 'react';

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mb-40 mt-10 flex w-full flex-col gap-10 md:mb-10">
      <AdminBar />
      {children}
    </div>
  );
}
