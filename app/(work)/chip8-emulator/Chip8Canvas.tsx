"use client";

import { useEffect, useState, useCallback, useRef } from "react";

// Types for the WASM module
interface Chip8 {
  tick: () => void;
  get_display: () => Uint8Array;
  get_execution_log: () => string;
  keypress: (key_index: number, pressed: boolean) => void;
  load_rom: (data: Uint8Array) => void;
  free: () => void;
}

interface Chip8Wasm {
  default: (path?: string) => Promise<void>;
  Chip8: new () => Chip8;
}

// CHIP-8 keypad mapping: original hex keys mapped to modern keyboard
// Original:    Modern keyboard:
// 1 2 3 C      1 2 3 4
// 4 5 6 D      Q W E R
// 7 8 9 E      A S D F
// A 0 B F      Z X C V
const KEY_MAP: Record<string, number> = {
  "1": 0x1, "2": 0x2, "3": 0x3, "4": 0xC,
  "q": 0x4, "w": 0x5, "e": 0x6, "r": 0xD,
  "a": 0x7, "s": 0x8, "d": 0x9, "f": 0xE,
  "z": 0xA, "x": 0x0, "c": 0xB, "v": 0xF,
};

const SCREEN_WIDTH = 64;
const SCREEN_HEIGHT = 32;
const SCALE = 10;

interface Chip8CanvasProps {
  romPath?: string;
}

export default function Chip8Canvas({ romPath }: Chip8CanvasProps) {
  const [wasmLoaded, setWasmLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [executionLog, setExecutionLog] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [romLoaded, setRomLoaded] = useState(false);

  const chip8Ref = useRef<Chip8 | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  // Load WASM module
  useEffect(() => {
    const loadWasm = async () => {
      try {
        const jsResponse = await fetch("/wasm/chip8.js");
        const jsCode = await jsResponse.text();

        const jsBlob = new Blob([jsCode], { type: "application/javascript" });
        const jsUrl = URL.createObjectURL(jsBlob);
        const wasmModule: Chip8Wasm = await import(/* webpackIgnore: true */ jsUrl);
        URL.revokeObjectURL(jsUrl);

        await wasmModule.default("/wasm/chip8_bg.wasm");
        chip8Ref.current = new wasmModule.Chip8();
        setWasmLoaded(true);
      } catch (err) {
        console.error("Failed to load WASM:", err);
        setError("Failed to load CHIP-8 emulator module");
      }
    };
    loadWasm();

    return () => {
      if (chip8Ref.current) {
        chip8Ref.current.free();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Load ROM when path changes
  useEffect(() => {
    if (!wasmLoaded || !chip8Ref.current || !romPath) return;

    const loadRom = async () => {
      try {
        const response = await fetch(romPath);
        const arrayBuffer = await response.arrayBuffer();
        const romData = new Uint8Array(arrayBuffer);

        // Reset and load new ROM
        chip8Ref.current!.free();
        const jsResponse = await fetch("/wasm/chip8.js");
        const jsCode = await jsResponse.text();
        const jsBlob = new Blob([jsCode], { type: "application/javascript" });
        const jsUrl = URL.createObjectURL(jsBlob);
        const wasmModule: Chip8Wasm = await import(/* webpackIgnore: true */ jsUrl);
        URL.revokeObjectURL(jsUrl);
        await wasmModule.default("/wasm/chip8_bg.wasm");
        chip8Ref.current = new wasmModule.Chip8();

        chip8Ref.current!.load_rom(romData);
        setRomLoaded(true);
        setIsRunning(true);
      } catch (err) {
        console.error("Failed to load ROM:", err);
        setError("Failed to load game ROM");
      }
    };
    loadRom();
  }, [wasmLoaded, romPath]);

  // Render display
  const renderDisplay = useCallback(() => {
    const chip8 = chip8Ref.current;
    const canvas = canvasRef.current;
    if (!chip8 || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const display = chip8.get_display();

    // Clear canvas
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, SCREEN_WIDTH * SCALE, SCREEN_HEIGHT * SCALE);

    // Draw pixels
    ctx.fillStyle = "#22c55e"; // Green phosphor color
    for (let y = 0; y < SCREEN_HEIGHT; y++) {
      for (let x = 0; x < SCREEN_WIDTH; x++) {
        if (display[y * SCREEN_WIDTH + x] === 1) {
          ctx.fillRect(x * SCALE, y * SCALE, SCALE - 1, SCALE - 1);
        }
      }
    }
  }, []);

  // Game loop
  useEffect(() => {
    if (!wasmLoaded || !isRunning || !chip8Ref.current) return;

    const TICKS_PER_FRAME = 10; // ~600Hz at 60fps

    const gameLoop = (timestamp: number) => {
      const chip8 = chip8Ref.current;
      if (!chip8) return;

      // Run multiple ticks per frame for faster execution
      for (let i = 0; i < TICKS_PER_FRAME; i++) {
        chip8.tick();
      }

      renderDisplay();
      setExecutionLog(chip8.get_execution_log());

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [wasmLoaded, isRunning, renderDisplay]);

  // Keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key in KEY_MAP && chip8Ref.current) {
        e.preventDefault();
        chip8Ref.current.keypress(KEY_MAP[key], true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key in KEY_MAP && chip8Ref.current) {
        e.preventDefault();
        chip8Ref.current.keypress(KEY_MAP[key], false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const togglePause = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);

  if (error) {
    return (
      <div className="w-full p-8 bg-red-900/20 border border-red-500/30 rounded-2xl text-center">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  if (!wasmLoaded) {
    return (
      <div className="w-full p-8 bg-zinc-900/50 border border-white/5 rounded-2xl text-center">
        <div className="animate-pulse text-zinc-400">Loading CHIP-8 emulator...</div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Main display area */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Canvas */}
        <div className="flex-1">
          <div className="relative bg-zinc-900/50 border border-white/5 rounded-2xl p-4 overflow-hidden">
            <canvas
              ref={canvasRef}
              width={SCREEN_WIDTH * SCALE}
              height={SCREEN_HEIGHT * SCALE}
              className="w-full aspect-[2/1] rounded-lg bg-[#0a0a0a] image-rendering-pixelated"
              style={{ imageRendering: "pixelated" }}
            />

            {!romLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80 rounded-2xl">
                <p className="text-zinc-400 text-center px-4">
                  Select a game to start playing
                </p>
              </div>
            )}

            {/* Controls overlay */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              <button
                onClick={togglePause}
                disabled={!romLoaded}
                className="px-4 py-2 rounded-lg bg-zinc-800/80 border border-white/10 text-sm text-zinc-300 hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRunning ? "⏸ Pause" : "▶ Resume"}
              </button>
            </div>
          </div>
        </div>

        {/* Execution log */}
        <div className="lg:w-80 bg-zinc-900/50 border border-white/5 rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Execution Log
          </h3>
          <div className="font-mono text-xs text-zinc-400 whitespace-pre-wrap bg-zinc-950 rounded-lg px-3 py-1 h-52">
            {executionLog || "Waiting for ROM..."}
          </div>
        </div>
      </div>

      {/* Keyboard reference */}
      <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl">
        <h3 className="text-sm font-semibold text-zinc-300 mb-3">Keyboard Controls</h3>
        <div className="flex flex-wrap gap-4 text-xs ml-[calc(100vw/10)]">
          <div className="flex-1 min-w-[200px]">
            <p className="text-zinc-500 mb-2">CHIP-8 Keypad → Your Keyboard:</p>
            <div className="grid grid-cols-4 gap-1 font-mono max-w-[200px]">
              {["1", "2", "3", "4", "Q", "W", "E", "R", "A", "S", "D", "F", "Z", "X", "C", "V"].map(key => (
                <div key={key} className="bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-center text-zinc-300">
                  {key}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <p className="text-zinc-500 mb-2">Original CHIP-8 Layout:</p>
            <div className="grid grid-cols-4 gap-1 font-mono max-w-[200px]">
              {["1", "2", "3", "C", "4", "5", "6", "D", "7", "8", "9", "E", "A", "0", "B", "F"].map(key => (
                <div key={key} className="bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-center text-zinc-500">
                  {key}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
