import { DM_Sans as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';

// Styles
import '@/styles/globals.css';
import React from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('dark font-sans antialiased', fontSans.variable)}>
        <main className={cn('container flex min-h-screen', fontSans.variable)}>{children}</main>
      </body>
    </html>
  );
}
