import Link from "next/link";
import PavlovCanvas from "./PavlovCanvas";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Pavlov's Dog Experiment",
  description: "An interactive spiking neural network demonstrating classical conditioning with Hebbian learning and extinction.",
};

export default function PavlovsDogPage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-20 px-6 min-h-screen">
      <article className="max-w-3xl w-full space-y-8">
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
            <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
              Interactive
            </span>
            <span>•</span>
            <span>Computational Neuroscience</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Pavlov&apos;s Dog
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            A spiking neural network built in Rust and WebAssembly demonstrating classical conditioning.
            Watch connections form through Hebbian learning and weaken through extinction.
          </p>
        </header>

        {/* Interactive Canvas */}
        <PavlovCanvas />

        {/* Explanation */}
        <section className="prose prose-invert prose-zinc max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-white">How It Works</h2>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">🔔 Bell (Neutral Stimulus)</h3>
              <p className="text-zinc-400 text-sm">
                Initially, ringing the bell has no effect on the dog. The connection weight from Bell → Salivate is 0.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-green-400 mb-2">🍖 Food (Unconditioned Stimulus)</h3>
              <p className="text-zinc-400 text-sm">
                Food always triggers salivation. This is a hardwired, instinctual response with a fixed strong weight.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">🎓 Training (Classical Conditioning)</h3>
              <p className="text-zinc-400 text-sm">
                Presenting bell + food together strengthens the Bell → Salivate connection through Hebbian learning
                (&quot;neurons that fire together, wire together&quot;).
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">📉 Extinction</h3>
              <p className="text-zinc-400 text-sm">
                After training, ringing the bell without food causes the weight to gradually decrease.
                The dog &quot;unlearns&quot; the association.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">Technical Details</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">Leaky Integrate-and-Fire (LIF) Neurons:</strong> Each neuron accumulates input current,
              applies a decay factor (leak), and fires when voltage exceeds a threshold.
            </li>
            <li>
              <strong className="text-zinc-200">Hebbian Learning:</strong> When bell and food neurons spike together,
              the synaptic weight increases by 0.1 (capped at 1.5).
            </li>
            <li>
              <strong className="text-zinc-200">Extinction:</strong> When bell spikes without food,
              the weight decreases by 0.15 (floored at 0).
            </li>
            <li>
              <strong className="text-zinc-200">Rust + WebAssembly:</strong> The neural network runs in compiled Rust
              for performance, exposed to JavaScript via wasm-bindgen.
            </li>
          </ul>
        </section>

        {/* Status Badge */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">
            ✓ Finished
          </span>
          <a
            href="https://github.com/jakewalklate/portfolio/tree/main/pavlov_brain"
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
