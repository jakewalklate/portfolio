"use client";

import { useEffect, useState, useRef } from "react";

const ORIGINAL_SEQUENCE = "GATCGATCGATCGATCGAC";
const TARGET_INDEX = 9; // The base to change
const NEW_BASE = "T"; // The new base

export default function GeneticEditing() {
  const [sequence, setSequence] = useState(ORIGINAL_SEQUENCE.split(""));
  const [cursorPos, setCursorPos] = useState(0);
  const [status, setStatus] = useState("SCANNING"); // SCANNING, EDITING, COMPLETE
  const [stats, setStats] = useState({ gc: 50, temp: 62.5, match: 0 });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const runAnimation = () => {
      // Reset
      setSequence(ORIGINAL_SEQUENCE.split(""));
      setCursorPos(0);
      setStatus("SCANNING");
      setStats({ gc: 50, temp: 62.5, match: 0 });

      // Scanning phase
      let currentPos = 0;
      const scanInterval = setInterval(() => {
        if (currentPos < TARGET_INDEX) {
          currentPos++;
          setCursorPos(currentPos);
          setStats(prev => ({
            ...prev,
            match: Math.min(100, prev.match + (100 / TARGET_INDEX))
          }));
        } else {
          clearInterval(scanInterval);
          setStatus("EDITING");

          // Editing phase
          setTimeout(() => {
            setSequence(prev => {
              const newSeq = [...prev];
              newSeq[TARGET_INDEX] = NEW_BASE;
              return newSeq;
            });
            setStatus("COMPLETE");
            setStats(prev => ({ ...prev, match: 100 }));

            // Restart loop
            timeout = setTimeout(runAnimation, 5000);
          }, 1500);
        }
      }, 150);
    };

    runAnimation();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const seqContainerRef = useRef<HTMLDivElement>(null);
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScanner = () => {
      if (status === "SCANNING" && seqContainerRef.current && scannerRef.current) {
        const child = seqContainerRef.current.children[cursorPos] as HTMLElement;
        if (child) {
          scannerRef.current.style.left = `${child.offsetLeft - 5}px`;
          scannerRef.current.style.top = `${child.offsetTop - 5}px`;
          scannerRef.current.style.height = `${child.offsetHeight + 10}px`;
          scannerRef.current.style.width = `${child.offsetWidth + 10}px`;
        }
      }
    };

    updateScanner();
    window.addEventListener("resize", updateScanner);
    return () => window.removeEventListener("resize", updateScanner);
  }, [cursorPos, status]);

  return (
    <div className="w-full max-w-4xl mx-auto font-mono text-sm bg-black border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-green-900/10">
      {/* Header / Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <span className="text-zinc-500 text-xs">CRISPR-Cas9.exe — v2.4.0</span>
        </div>
        <div className="flex gap-4 text-[10px] text-zinc-500">
          <span>MEM: 64MB</span>
          <span>CPU: 12%</span>
        </div>
      </div>

      {/* Main Interface */}
      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-1 sm:gap-4">
          <div className="p-3 bg-zinc-900/30 rounded border border-zinc-800">
            <div className="text-xs text-zinc-500 mb-1">GC Content</div>
            <div className="text-lg font-bold text-zinc-300">{stats.gc}%</div>
          </div>
          <div className="p-3 bg-zinc-900/30 rounded border border-zinc-800">
            <div className="text-xs text-zinc-500 mb-1">Melting Temp</div>
            <div className="text-lg font-bold text-zinc-300">{stats.temp}°C</div>
          </div>
          <div className="p-3 bg-zinc-900/30 rounded border border-zinc-800">
            <div className="text-xs text-zinc-500 mb-1">Match Score</div>
            <div className={`text-lg font-bold ${stats.match > 90 ? 'text-green-400' : 'text-zinc-300'}`}>
              {Math.floor(stats.match)}%
            </div>
          </div>
        </div>

        {/* Sequence Display */}
        <div className="relative py-8 px-4 bg-zinc-900/20 rounded border border-zinc-800/50 overflow-hidden">
          {/* Scan Line */}
          <div
            ref={scannerRef}
            className={`absolute bg-green-500/30 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-100 ease-linear z-10 pointer-events-none rounded ${status === "SCANNING" ? "opacity-100" : "opacity-0"}`}
            style={{ width: 0, height: 0 }} // Initial size, updated by ref
          />

          <div ref={seqContainerRef} className="flex justify-between w-full text-xs sm:text-sm md:text-lg lg:text-xl tracking-normal sm:tracking-normal md:tracking-[0.2em] font-bold">
            {sequence.map((base, i) => (
              <span
                key={i}
                className={`
                  relative inline-block transition-all duration-300 
                  ${i === cursorPos ? "text-white scale-110" : "text-zinc-600"} 
                  ${status === "EDITING" && i === TARGET_INDEX ? "text-yellow-400! animate-pulse" : ""}
                  ${status === "COMPLETE" && i === TARGET_INDEX ? "text-green-400! scale-110 animate-pulse" : ""} 
                `}
              >
                {base}
                {i === TARGET_INDEX && status === "EDITING" && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-yellow-500 font-normal whitespace-nowrap">
                    EDITING
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${status === "SCANNING" ? "bg-blue-500 animate-pulse" :
              status === "EDITING" ? "bg-yellow-500 animate-pulse" :
                "bg-green-500"
              }`} />
            <span className="text-xs text-zinc-400">
              {status === "SCANNING" && "SCANNING SEQUENCE..."}
              {status === "EDITING" && "MODIFYING BASE PAIR..."}
              {status === "COMPLETE" && "EDIT COMPLETE. SEQUENCE STABLE."}
            </span>
          </div>
          <span className="text-xs text-zinc-600 font-mono">
            Ln {1}, Col {cursorPos + 1}
          </span>
        </div>
      </div>
    </div>
  );
}
