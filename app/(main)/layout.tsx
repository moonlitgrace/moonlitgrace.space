import Appbar from '@/components/main/appbar';

export default function MainLayout({
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
