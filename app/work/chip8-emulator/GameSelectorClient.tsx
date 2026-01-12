"use client";

import { useState } from "react";
import Chip8Canvas from "./Chip8Canvas";

interface GameSelectorClientProps {
  games: { name: string; path: string }[];
}

export default function GameSelectorClient({ games }: GameSelectorClientProps) {
  const [selectedGame, setSelectedGame] = useState<string | undefined>(undefined);

  return (
    <div className="space-y-4">
      {/* Game selector */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-zinc-500">Select a game:</span>
        {games.map((game) => (
          <button
            key={game.path}
            onClick={() => setSelectedGame(game.path)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedGame === game.path
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                : "bg-zinc-800/50 text-zinc-400 border border-white/5 hover:bg-zinc-800 hover:text-zinc-300"
              }`}
          >
            {game.name}
          </button>
        ))}
      </div>

      {/* Canvas */}
      <Chip8Canvas romPath={selectedGame} />
    </div>
  );
}
