import { MousePointerClick } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function BookPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-6">
      <MousePointerClick className="w-16 h-16 text-blue-400 animate-pulse" />
      <h1 className="text-3xl font-bold text-white">Book Page</h1>
      <p className="text-zinc-400 text-lg">This page is under construction. Please check back later.</p>
      <Link href="/book/the-pharmacology-of-silence" className="text-blue-400 hover:underline">Are you looking for "The Pharmacology of Silence"?</Link>
    </div>
  );
}