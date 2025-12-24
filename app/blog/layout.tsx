export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto w-full">
        {children}
      </div>
    </main>
  );
}