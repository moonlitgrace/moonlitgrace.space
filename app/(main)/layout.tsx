import Appbar from '@/components/main/appbar';

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

