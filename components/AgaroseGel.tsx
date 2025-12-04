"use client";

export default function AgaroseGel() {
  // Generate some random bands for the "samples"
  const lanes = [
    { id: "ladder", bands: [10, 20, 30, 40, 50, 60, 70, 80, 90] }, // DNA Ladder
    { id: "sample1", bands: [25, 45, 85] },
    { id: "sample2", bands: [15, 60] },
    { id: "sample3", bands: [30, 50, 70] },
    { id: "sample4", bands: [20, 80] },
    { id: "control", bands: [50] },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative bg-zinc-900/80 rounded-lg border-4 border-zinc-800 shadow-[0_0_50px_rgba(168,85,247,0.1)] overflow-hidden">
        {/* UV Light Glow Effect */}
        <div className="absolute inset-0 bg-purple-900/10 pointer-events-none mix-blend-overlay" />

        {/* Gel Tank Header */}
        <div className="flex justify-center items-center px-4 py-2 bg-zinc-950/50 border-b border-zinc-800/50 text-[10px] text-zinc-500 font-mono uppercase tracking-widest relative z-10">
          <span>1.5% Agarose / EtBr</span>
        </div>

        {/* The Gel */}
        <div className="relative p-6 pt-12 min-h-[300px] flex flex-col items-stretch bg-linear-to-b from-zinc-900/50 to-zinc-950/50">

          {/* Cathode Label (Top) */}
          <div className="absolute top-2 left-4 text-[10px] text-zinc-500 font-mono uppercase tracking-widest pointer-events-none">
            (-) Cathode
          </div>

          <div className="flex justify-around items-stretch grow pb-6">
            {lanes.map((lane) => (
              <div key={lane.id} className="relative flex-1 flex flex-col items-center group">
                {/* Well */}
                <div className="w-8 h-4 bg-zinc-950 rounded-b-md mb-4 border-x border-b border-zinc-800/50 shadow-inner relative z-20" />

                {/* Lane Label - Reverted style, positioned above */}
                <div className="absolute -top-6 text-[10px] text-zinc-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {lane.id}
                </div>

                {/* Bands */}
                <div className="relative w-full h-full grow">
                  {lane.bands.map((pos, i) => (
                    <div
                      key={i}
                      className="absolute left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-sm bg-purple-400/80 shadow-[0_0_15px_rgba(192,132,252,0.6)] mix-blend-screen opacity-80"
                      style={{ top: `${pos}%` }}
                    >
                      {/* Band irregularity for realism */}
                      <div className="absolute inset-0 bg-white/20 blur-[1px] rounded-sm" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Anode Label (Bottom) */}
          <div className="absolute bottom-2 left-4 text-[10px] text-zinc-500 font-mono uppercase tracking-widest pointer-events-none">
            (+) Anode
          </div>
        </div>

        {/* Footer / Scale */}
        <div className="absolute bottom-2 right-4 text-[10px] text-purple-500/50 font-mono">
          UV Transilluminator: ON
        </div>
      </div>
    </div>
  );
}
