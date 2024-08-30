import dynamic from 'next/dynamic';

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
