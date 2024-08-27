import Appbar from '@/components/appbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Appbar />
    </>
  );
}

