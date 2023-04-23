export default function ProductsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-2">
      <section className="flex">
        <div className="border-2 m-3 p-3">Products Layout</div>
        {children}
      </section>
    </div>
  );
}
