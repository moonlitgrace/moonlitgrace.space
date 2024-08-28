import AdminBar from "@/components/admin/AdminBar";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mb-40 mt-10 flex w-full flex-col gap-10 md:mb-10">
      <AdminBar />
      {children}
    </main>
  );
}