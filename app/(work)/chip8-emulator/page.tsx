import Link from "next/link";
import Chip8Canvas from "./Chip8Canvas";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "CHIP-8 Emulator",
  description: "An interactive CHIP-8 emulator with visible machine state and playable games, built with Rust and WebAssembly.",
};

// Games available in /public/chip-games/
const AVAILABLE_GAMES = [
  { name: "Space Invaders", path: "/chip-games/Space Invaders [David Winter].ch8" },
  { name: 'Tetris', path: '/chip-games/Tetris [Fran Dachille, 1991].ch8' },
];

export default function Chip8EmulatorPage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-20 px-6 min-h-screen">
      <article className="max-w-4xl w-full space-y-8">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to all projects</span>
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
              Interactive
            </span>
            <span>•</span>
            <span>Systems Programming</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            CHIP-8 Emulator
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            A cycle-accurate CHIP-8 virtual machine built in Rust and WebAssembly.
            Watch machine code execute in real-time while playing classic games from the 1970s.
          </p>
        </header>

        {/* Game Selector */}
        <GameSelector games={AVAILABLE_GAMES} />

        {/* Explanation */}
        <section className="prose prose-invert prose-zinc max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-white">How It Works</h2>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">🔧 Fetch-Decode-Execute</h3>
              <p className="text-zinc-400 text-sm">
                Each cycle, the emulator fetches a 2-byte opcode from RAM, decodes it into an instruction,
                and executes the operation. The execution log shows this process in real-time.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-green-400 mb-2">🖥️ 64×32 Display</h3>
              <p className="text-zinc-400 text-sm">
                The CHIP-8 uses a 1-bit monochrome display. Sprites are drawn using XOR logic—if a pixel
                is already on, drawing over it turns it off and sets the collision flag (VF).
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">⌨️ Hex Keypad</h3>
              <p className="text-zinc-400 text-sm">
                The original CHIP-8 had a 16-key hexadecimal keypad (0-F). This emulator maps it to
                your keyboard: 1-4 / Q-R / A-F / Z-V rows.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">📜 35 Instructions</h3>
              <p className="text-zinc-400 text-sm">
                CHIP-8 has only 35 opcodes covering jumps, conditionals, math, graphics, and input.
                The disassembler converts raw bytes into readable mnemonics like <code className="text-zinc-300">JMP 200</code> or <code className="text-zinc-300">LD V0, 42</code>.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">Technical Details</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">4KB RAM:</strong> Programs load at address 0x200,
              with fonts stored at 0x000-0x050.
            </li>
            <li>
              <strong className="text-zinc-200">16 Registers:</strong> V0-VE are general purpose,
              VF is the carry/collision flag.
            </li>
            <li>
              <strong className="text-zinc-200">Stack:</strong> 16 levels deep for subroutine calls.
            </li>
            <li>
              <strong className="text-zinc-200">Timers:</strong> Delay and sound timers count down at 60Hz.
            </li>
            <li>
              <strong className="text-zinc-200">Rust + WebAssembly:</strong> The entire VM runs in compiled
              Rust for near-native performance in the browser.
            </li>
          </ul>
        </section>

        {/* Status Badge */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">
            ✓ Finished
          </span>
          <a
            href="https://github.com/jakewalklate/portfolio/tree/main/chip8"
            target="_blank"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            View source →
          </a>
        </div>
      </article>
    </main>
  );
}

// Client component for game selection
function GameSelector({ games }: { games: { name: string; path: string }[] }) {
  return <GameSelectorClient games={games} />;
}

import GameSelectorClient from "./GameSelectorClient";