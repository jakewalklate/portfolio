"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function DynamicNav() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="flex gap-6 text-sm font-medium text-zinc-400">
      <Link href="/who-am-i" className={`${segment === "who-am-i" ? 'text-white' : ''} hover:text-white transition-colors mx-1 active:scale-[0.98]`}>Bio</Link>
      <Link href="/work" className={`${segment === 'work' ? 'text-white' : ''} hover:text-white transition-colors mx-1 active:scale-[0.98]`}>Work</Link>
      <Link href="/blog" className={`${segment === 'blog' ? 'text-white' : ''} hover:text-white transition-colors mx-1 active:scale-[0.98]`}>Blog</Link>
    </nav>
  );
}