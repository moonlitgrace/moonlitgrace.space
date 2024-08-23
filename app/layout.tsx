import { DM_Sans as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';

// Styles
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';

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
      <body
        className={cn('dark container flex min-h-screen font-sans antialiased', fontSans.variable)}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
