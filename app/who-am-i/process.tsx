"use client";

import { useEffect, useState } from "react";

export default function Process({ proc }: { proc: { name: string; pid: string; mem: string; sleeping: boolean } }) {
  const [isSleeping, setSleeping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSleeping(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="text-zinc-600 text-xs w-10">{proc.pid}</span>
      <span className={`${isSleeping ? 'text-amber-400 group-hover:text-amber-300' : 'text-green-400 group-hover:text-green-300'} transition-colors`}>{proc.name}</span>
      <span className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${isSleeping ? 'bg-amber-500' : 'bg-green-500'} animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]`} />
        <span className="text-zinc-500 text-xs hidden sm:inline">{isSleeping ? 'sleeping' : 'running'}</span>
      </span>
      <span className="text-zinc-600 text-xs hidden sm:block">{proc.mem}</span>
    </>
  );
}