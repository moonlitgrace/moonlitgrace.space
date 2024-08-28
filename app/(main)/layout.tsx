import AppBar from "@/components/main/AppBar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <AppBar />
    </>
  );
}
