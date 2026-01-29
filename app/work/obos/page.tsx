import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "OpenBio Operating System (OBOS)",
  description: "A local-first, modular Biological Operating System bridging physical lab inventory, digital notebooks, and computational analysis.",
};

export default function OBOSPage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-20 px-6 min-h-screen">
      <article className="max-w-4xl w-full space-y-12">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to all projects</span>
        </Link>

        {/* Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              Open Source
            </span>
            <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
              Bioinformatics
            </span>
            <span className="px-2 py-0.5 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
              Rust
            </span>
            <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
              Tauri
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            OpenBio Operating System
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
            A master architecture and implementation guide for a "Biological Operating System" that bridges the gap between physical lab inventory, digital experimental notes, and computational analysis.
          </p>
        </header>

        {/* Problem & Solution Grid */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">The Problem & Solution</h2>
            <p className="text-zinc-400">Why the current bio-software landscape fails, and how OpenBio fixes it.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Problem 1 */}
            <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-200">The "Air-Gapped" Reality</h3>
                <span className="text-xs font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded">PROBLEM</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Physical samples, protocols, and digital data live on systems that don't talk to each other.
                Six months later, a 50GB file is useless because you don't know which patient it came from.
              </p>
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-emerald-400">The Unity Schema</h4>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">SOLUTION</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We force a hard link. A digital file implies an Experiment, which implies a Physical Sample.
                  Clicking a data point traces all the way back to the freezer slot.
                </p>
              </div>
            </div>
            {/* Problem 2 */}
            <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-200">The "Bus Factor"</h3>
                <span className="text-xs font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded">PROBLEM</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Vital knowledge lives in people's heads. If "Steve who knows where the samples are" leaves, the lab grinds to a halt.
              </p>
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-emerald-400">Database as Truth</h4>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">SOLUTION</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The Inventory Module is the source of truth, not memory. Git-backed protocols mean every change is timestamped and authored.
                </p>
              </div>
            </div>
            {/* Problem 3 */}
            <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-200">The "IT Barrier"</h3>
                <span className="text-xs font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded">PROBLEM</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Existing enterprise software is too expensive; open-source tools require a DevOps degree. Small labs are stuck on Excel.
              </p>
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-emerald-400">Tauri Hub</h4>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">SOLUTION</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  "Enterprise-grade" structure in a "Double-click install" executable. A PhD student can set up a fully traceable lab system in 5 minutes.
                </p>
              </div>
            </div>
            {/* Problem 4 */}
            <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-200">The "Black Box" of Analysis</h3>
                <span className="text-xs font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded">PROBLEM</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Biologists can't code Python/R. They wait weeks for bioinformaticians to generate static PDF plots they can't explore.
              </p>
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-emerald-400">WASM Insight Module</h4>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">SOLUTION</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We wrap complex math in a friendly UI. Biologists can "Gate" and "Test" without writing code, empowering domain experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Story */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">From Freezer to Insight</h2>
          <div className="relative border-l border-zinc-800 pl-8 space-y-12 my-8">
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-zinc-700 bg-zinc-900"></span>
              <h3 className="text-lg font-semibold text-white mb-2">1. The Inventory (Morning)</h3>
              <p className="text-zinc-400 text-sm">Scan QR on tube (Sample P-405) and Box 4. <br /> <strong className="text-zinc-300">Link:</strong> Database knows Sample P-405 is in Box 4, Slot A1.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-zinc-700 bg-zinc-900"></span>
              <h3 className="text-lg font-semibold text-white mb-2">2. The Experiment Setup (Noon)</h3>
              <p className="text-zinc-400 text-sm">Create "New Experiment" and select Sample P-405. <br /> <strong className="text-zinc-300">Link:</strong> Experiment 505 contains Sample P-405.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-zinc-700 bg-zinc-900"></span>
              <h3 className="text-lg font-semibold text-white mb-2">3. The Lab Work (Afternoon)</h3>
              <p className="text-zinc-400 text-sm">Open Experiment 505 notebook. Note: "Used Protocol A, but added extra reagent. @Sample-P-405." <br /> <strong className="text-zinc-300">Link:</strong> Metadata snapshots preserved via @mentions.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-zinc-700 bg-zinc-900"></span>
              <h3 className="text-lg font-semibold text-white mb-2">4. The Data Haul (Next Day)</h3>
              <p className="text-zinc-400 text-sm">Sequencer finishes. Ingest Agent (or manual upload) detects file. <br /> <strong className="text-zinc-300">Link:</strong> File `run_data.fastq` belongs to Experiment 505.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-zinc-700 bg-zinc-900"></span>
              <h3 className="text-lg font-semibold text-white mb-2">5. The Processing (Nextflow)</h3>
              <p className="text-zinc-400 text-sm">OpenBio triggers Nextflow wrapper. Math turns text strings into count matrix (`matrix.mtx`).</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-zinc-700 bg-zinc-900"></span>
              <h3 className="text-lg font-semibold text-white mb-2">6. The Insight (Visualization)</h3>
              <p className="text-zinc-400 text-sm">WASM Engine loads matrix. You hover a red dot: "High Insulin. Sample P-405 (Box 4). Note: 'extra reagent'." <br /> <strong className="text-emerald-400">Payoff:</strong> Full traceability.</p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white">Architecture</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-zinc-200 mb-4">Technology Stack</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><strong className="text-zinc-200 block">The Client (Tauri Desktop App)</strong> Tauri v2, Vite + React + TS, TanStack Query, ShadCN/UI. WASM Engine (Rust) for Insight.</li>
                <li><strong className="text-zinc-200 block">The Server (Rust API)</strong> Axum (HTTP), Prisma Client Rust (DB), Abstracted Storage (LocalFS/S3).</li>
                <li><strong className="text-zinc-200 block">Deployment</strong> Embedded (runs inside Tauri for solo/small labs) or Headless (Docker for Enterprise).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-200 mb-4">Deployment Tiers</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><strong className="text-zinc-200">Tier 1: Solo Mode</strong> Single machine, offline, local SQLite.</li>
                <li><strong className="text-zinc-200">Tier 2: Small Lab (Hub & Spoke)</strong> One machine acts as Hub (mDNS broadcast), others connect via LAN.</li>
                <li><strong className="text-zinc-200">Tier 3: Enterprise</strong> Remote Docker API + Postgres + S3.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deep Dive */}
        <section className="space-y-6">
          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-4">Handling Large Files (50GB+)</h3>
            <p className="text-zinc-400 text-sm mb-4">
              How do we move data from a 50GB fastq file to a WebGL visualization without checking 64GB of RAM?
            </p>
            <ul className="space-y-2 text-sm text-zinc-400 list-disc list-inside">
              <li><strong className="text-zinc-300">Memory Mapping (Mmap):</strong> Rust Core uses `memmap2` to map file on disk to virtual address space, avoiding full load.</li>
              <li><strong className="text-zinc-300">SharedArrayBuffer Pipeline:</strong> Zero-copy transfer. Rust reads chunks &rarr; Web Worker (WASM) via IPC &rarr; SharedArrayBuffer.</li>
              <li><strong className="text-zinc-300">React-less Compute:</strong> React only sends coordinates. WASM Worker iterates SAB and updates Selection Bitmask.</li>
              <li><strong className="text-zinc-300">WebGL Renderer:</strong> Reads directly from SAB as Vertex Buffer Object.</li>
            </ul>
          </div>
        </section>

        {/* Modules */}
        <section className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-white">Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl">
              <h4 className="font-semibold text-zinc-200">Module A: The Freezer</h4>
              <p className="text-xs text-zinc-500 mt-1">Inventory & Identity. Polymorphic storage (Facility &rarr; Box).</p>
            </div>
            <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl">
              <h4 className="font-semibold text-zinc-200">Module B: Notebook</h4>
              <p className="text-xs text-zinc-500 mt-1">Git-backed Markdown protocols with smart linking (@Sample_ID).</p>
            </div>
            <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl">
              <h4 className="font-semibold text-zinc-200">Module C: Pipeline Automator</h4>
              <p className="text-xs text-zinc-500 mt-1">Rust wrapper around Nextflow. Dynamic config & live streaming logs.</p>
            </div>
            <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl">
              <h4 className="font-semibold text-zinc-200">Module D: Ingest Agent</h4>
              <p className="text-xs text-zinc-500 mt-1">Separate binary on instrument PCs. Auto-uploads & tags files.</p>
            </div>
            <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl">
              <h4 className="font-semibold text-zinc-200">Module E: Insight</h4>
              <p className="text-xs text-zinc-500 mt-1">WASM/WebGL Single-Cell Explorer. Zero-copy rendering.</p>
            </div>
            <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl">
              <h4 className="font-semibold text-zinc-200">Module F: Library</h4>
              <p className="text-xs text-zinc-500 mt-1">Zotero-like reference manager. Auto-bibliography generation.</p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="space-y-4 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white">Development Roadmap</h2>
          <div className="space-y-2 text-sm text-zinc-400">
            <div className="flex gap-4">
              <span className="text-zinc-500 min-w-[60px]">Phase 1</span>
              <span>Client scaffold, Core server (Embedded/Hub), Config wizard.</span>
            </div>
            <div className="flex gap-4">
              <span className="text-zinc-500 min-w-[60px]">Phase 2</span>
              <span>Database (Prisma), Inventory schemas, Box Grid UI.</span>
            </div>
            <div className="flex gap-4">
              <span className="text-zinc-500 min-w-[60px]">Phase 3</span>
              <span>Networking & Discovery (mDNS), Connection Settings UI.</span>
            </div>
            <div className="flex gap-4">
              <span className="text-zinc-500 min-w-[60px]">Phase 4</span>
              <span>Pipelines (Nextflow wrapper), Ingest Agent CLI.</span>
            </div>
            <div className="flex gap-4">
              <span className="text-zinc-500 min-w-[60px]">Phase 5</span>
              <span>Insight analsysis & T-Test automation.</span>
            </div>
            <div className="flex gap-4">
              <span className="text-zinc-500 min-w-[60px]">Phase 6</span>
              <span>Docker image release and enterprise licensing.</span>
            </div>
          </div>
        </section>

        <section className="space-y-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20">
              Under Development
            </span>
            <a
              href="https://github.com/openbio-os"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              View source →
            </a>
          </div>
        </section>

      </article>
    </main>
  );
}