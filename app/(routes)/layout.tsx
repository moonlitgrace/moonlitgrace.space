import { DM_Sans as FontSans } from 'next/font/google';

// Styles
import '@/styles/globals.css';
import React from 'react';
import { cn } from '@/utils/cn';

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
