"use client";

import { useEffect, useState, useCallback, useRef } from "react";

// Types for the WASM module
interface Brain {
  tick: (bell: boolean, food: boolean) => void;
  get_salivate_voltage: () => number;
  is_salivate_spiking: () => boolean;
  get_bell_weight: () => number;
  free: () => void;
}

interface PavlovWasm {
  default: () => Promise<void>;
  Brain: new () => Brain;
  init_logging: () => void;
}

interface NeuronState {
  voltage: number;
  isSpiking: boolean;
}

export default function PavlovCanvas() {
  const [wasmLoaded, setWasmLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const brainRef = useRef<Brain | null>(null);

  // Neuron states
  const [bellNeuron, setBellNeuron] = useState<NeuronState>({ voltage: 0, isSpiking: false });
  const [foodNeuron, setFoodNeuron] = useState<NeuronState>({ voltage: 0, isSpiking: false });
  const [salivateNeuron, setSalivateNeuron] = useState<NeuronState>({ voltage: 0, isSpiking: false });
  const [bellWeight, setBellWeight] = useState(0);
  const [isTraining, setIsTraining] = useState(false);

  // Active stimuli
  const [bellActive, setBellActive] = useState(false);
  const [foodActive, setFoodActive] = useState(false);

  // Load WASM module
  useEffect(() => {
    const loadWasm = async () => {
      try {
        // Fetch the JS glue code as text and evaluate it
        const jsResponse = await fetch("/wasm/pavlov_brain.js");
        const jsCode = await jsResponse.text();

        // Create a module from the JS code
        const jsBlob = new Blob([jsCode], { type: "application/javascript" });
        const jsUrl = URL.createObjectURL(jsBlob);
        const wasmModule = await import(/* webpackIgnore: true */ jsUrl);
        URL.revokeObjectURL(jsUrl);

        // Initialize with the WASM binary
        await wasmModule.default("/wasm/pavlov_brain_bg.wasm");
        wasmModule.init_logging();
        brainRef.current = new wasmModule.Brain();
        setWasmLoaded(true);
      } catch (err) {
        console.error("Failed to load WASM:", err);
        setError("Failed to load neural network module");
      }
    };
    loadWasm();

    return () => {
      if (brainRef.current) {
        brainRef.current.free();
      }
    };
  }, []);

  // Simulation loop
  useEffect(() => {
    if (!wasmLoaded || !brainRef.current) return;

    const interval = setInterval(() => {
      const brain = brainRef.current!;

      // Run tick with current stimuli
      brain.tick(bellActive, foodActive);

      // Update states
      setSalivateNeuron({
        voltage: brain.get_salivate_voltage(),
        isSpiking: brain.is_salivate_spiking(),
      });
      setBellWeight(brain.get_bell_weight());

      // Visual feedback for sensory neurons
      setBellNeuron(prev => ({
        voltage: bellActive ? 1.0 : prev.voltage * 0.8,
        isSpiking: bellActive,
      }));
      setFoodNeuron(prev => ({
        voltage: foodActive ? 1.0 : prev.voltage * 0.8,
        isSpiking: foodActive,
      }));
    }, 100); // 10 ticks per second

    return () => clearInterval(interval);
  }, [wasmLoaded, bellActive, foodActive]);

  const handleBell = useCallback(() => {
    setBellActive(true);
    setTimeout(() => setBellActive(false), 300);
  }, []);

  const handleFood = useCallback(() => {
    setFoodActive(true);
    setTimeout(() => setFoodActive(false), 300);
  }, []);

  const handleTrain = useCallback(() => {
    if (!brainRef.current || isTraining) return;

    setIsTraining(true);
    let ticks = 0;
    const trainInterval = setInterval(() => {
      brainRef.current!.tick(true, true);
      setBellNeuron({ voltage: 1.0, isSpiking: true });
      setFoodNeuron({ voltage: 1.0, isSpiking: true });
      setSalivateNeuron({
        voltage: brainRef.current!.get_salivate_voltage(),
        isSpiking: brainRef.current!.is_salivate_spiking(),
      });
      setBellWeight(brainRef.current!.get_bell_weight());

      ticks++;
      if (ticks >= 20) {
        clearInterval(trainInterval);
        setIsTraining(false);
        setBellNeuron({ voltage: 0, isSpiking: false });
        setFoodNeuron({ voltage: 0, isSpiking: false });
      }
    }, 50);
  }, [isTraining]);

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
        <div className="animate-pulse text-zinc-400">Loading neural network...</div>
      </div>
    );
  }

  const dogIsSalivating = salivateNeuron.isSpiking;

  return (
    <div className="w-full space-y-6">
      {/* Neural Network Visualization */}
      <div className="relative w-full aspect-video sm:aspect-2/1 bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden p-4 sm:p-8">
        <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {/* Connection: Bell -> Salivate */}
          <line
            x1="80" y1="50"
            x2="320" y2="100"
            stroke={bellWeight > 0 ? `rgba(251, 191, 36, ${Math.min(1, bellWeight / 1.5)})` : "rgba(255,255,255,0.1)"}
            strokeWidth={Math.max(1, bellWeight * 3)}
            className="transition-all duration-200"
          />
          {/* Connection: Food -> Salivate (always strong) */}
          <line
            x1="80" y1="150"
            x2="320" y2="100"
            stroke="rgba(34, 197, 94, 0.8)"
            strokeWidth="4"
          />

          {/* Bell Neuron */}
          <g transform="translate(80, 50)">
            <circle
              r="30"
              fill={bellNeuron.isSpiking ? "#fbbf24" : "#1f1f1f"}
              stroke={bellNeuron.isSpiking ? "#fbbf24" : "#3f3f46"}
              strokeWidth="2"
              className="transition-all duration-100"
            />
            {bellNeuron.isSpiking && (
              <circle r="35" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.5" className="animate-ping" />
            )}
            <text y="5" textAnchor="middle" fill="white" fontSize="20">🔔</text>
          </g>

          {/* Food Neuron */}
          <g transform="translate(80, 150)">
            <circle
              r="30"
              fill={foodNeuron.isSpiking ? "#22c55e" : "#1f1f1f"}
              stroke={foodNeuron.isSpiking ? "#22c55e" : "#3f3f46"}
              strokeWidth="2"
              className="transition-all duration-100"
            />
            {foodNeuron.isSpiking && (
              <circle r="35" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.5" className="animate-ping" />
            )}
            <text y="5" textAnchor="middle" fill="white" fontSize="20">🍖</text>
          </g>

          {/* Salivate Neuron */}
          <g transform="translate(320, 100)">
            <circle
              r="35"
              fill={salivateNeuron.isSpiking ? "#3b82f6" : "#1f1f1f"}
              stroke={salivateNeuron.isSpiking ? "#3b82f6" : "#3f3f46"}
              strokeWidth="2"
              className="transition-all duration-100"
            />
            {salivateNeuron.isSpiking && (
              <circle r="42" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.5" className="animate-ping" />
            )}
            <text y="5" textAnchor="middle" fill="white" fontSize="24">🐕</text>
          </g>

          {/* Weight Label */}
          <text x="200" y="60" textAnchor="middle" fill="#71717a" fontSize="11" fontFamily="monospace">
            weight: {bellWeight.toFixed(2)}
          </text>
        </svg>

        {/* Dog Reaction Indicator */}
        <div className={`absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${dogIsSalivating
          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
          : "bg-zinc-800/50 text-zinc-500 border border-zinc-700/50"
          }`}>
          {dogIsSalivating ? "🤤 Salivating!" : "😐 Neutral"}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <button
          onClick={handleBell}
          disabled={isTraining}
          className="flex flex-col items-center justify-center gap-2 p-4 sm:p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/40 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-2xl sm:text-3xl">🔔</span>
          <span className="text-xs sm:text-sm font-medium text-amber-400">Bell</span>
        </button>

        <button
          onClick={handleFood}
          disabled={isTraining}
          className="flex flex-col items-center justify-center gap-2 p-4 sm:p-6 rounded-2xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-2xl sm:text-3xl">🍖</span>
          <span className="text-xs sm:text-sm font-medium text-green-400">Food</span>
        </button>

        <button
          onClick={handleTrain}
          disabled={isTraining}
          className="flex flex-col items-center justify-center gap-2 p-4 sm:p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-2xl sm:text-3xl">{isTraining ? "⏳" : "🎓"}</span>
          <span className="text-xs sm:text-sm font-medium text-purple-400">
            {isTraining ? "Training..." : "Train"}
          </span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
          <div className="text-xs text-zinc-500 mb-1">Bell → Salivate Weight</div>
          <div className="text-lg font-mono font-bold text-amber-400">{bellWeight.toFixed(2)}</div>
        </div>
        <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
          <div className="text-xs text-zinc-500 mb-1">Salivate Voltage</div>
          <div className="text-lg font-mono font-bold text-blue-400">{salivateNeuron.voltage.toFixed(2)}</div>
        </div>
        <div className="hidden sm:block p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
          <div className="text-xs text-zinc-500 mb-1">Status</div>
          <div className={`text-lg font-bold ${salivateNeuron.isSpiking ? "text-green-400" : "text-zinc-400"}`}>
            {salivateNeuron.isSpiking ? "⚡ SPIKE" : "Idle"}
          </div>
        </div>
      </div>
    </div>
  );
}
