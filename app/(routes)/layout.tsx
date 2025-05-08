

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container mx-auto px-8">{children}</div>
    </>
  );
}