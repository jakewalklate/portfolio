"use client";
import GeneticEditing from "@/components/GeneticEditing";
import AgaroseGel from "@/components/AgaroseGel";

import Link from "next/link";
import { Info, Leaf, Microscope, Telescope, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-32 pb-20 px-6 relative max-w-5xl mx-auto w-full">
      {/* 1. ABSTRACT */}
      <section className="w-full space-y-8 text-center sm:text-left py-12 border-b border-zinc-800/50">
        <h2 className="text-left! text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">1. Abstract</h2>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mx-auto sm:mx-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for project discussion
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] -mt-1">
          <span className="opacity-80">Jake Spencer Walklate</span>
        </h1>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-medium text-zinc-400">
            Biotech & Software Engineer
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed mx-auto sm:mx-0">
            Merging biological systems with engineering principles.
            Also known online as <span className="text-white font-semibold">svnty</span>.
            Building the future of biotech and digital experiences.
          </p>
        </div>
      </section>

      {/* 2. AIMS */}
      <section className="w-full py-12 border-b border-zinc-800/50 space-y-8">
        <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">2. Aims</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/50  border border-white/5 hover:border-blue-500/30 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Microscope size={20} />
            </div>
            <h4 className="text-white font-medium mb-2">Engineering Complexity</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              I am passionate about solving complex problems. I build robust, scalable systems that handle high-stakes requirements.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users size={20} />
            </div>
            <h4 className="text-white font-medium mb-2">Accelerating Discovery</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Leveraging a unique background to build the tools researchers need. Bridging the gap between software and science to increase the velocity of innovation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-green-500/30 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Leaf size={20} />
            </div>
            <h4 className="text-white font-medium mb-2">Advancing Human Health</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Communities need help. I am driven to build systems that support resilience, reduce suffering, and extend healthy human lifespans.
            </p>
          </div>
        </div>
      </section>

      {/* 3. METHODS */}
      <section className="w-full py-12 border-b border-zinc-800/50 space-y-8">
        <div className="flex flex-col gap-8 justify-between items-start">
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">3. Methods</h2>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">Engineering Principles</h3>
              <p className="text-zinc-400 leading-relaxed">
                Applying rigorous software design patterns and engineering principles to solve complex problems across domains.
                Whether architecting digital systems or designing biological recombinants, I leverage technology to create robust, scalable solutions.
              </p>
            </div>
          </div>

          <div className="w-full flex-1">
            <div className="opacity-80 hover:opacity-100 transition-opacity duration-500">
              <GeneticEditing />
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESULTS */}
      <section className="w-full py-12 border-b border-zinc-800/50 space-y-8">
        <div className="flex flex-col gap-8 justify-between items-start">
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">4. Results</h2>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">Applied Synthetic Biotech</h3>
              <p className="text-zinc-400 leading-relaxed">
                Demonstrating the efficacy of these engineering methods in the field of synthetic biology.
                Optimizing genetic constructs and biological systems to deliver tangible, sustainable outcomes.
              </p>
            </div>
          </div>

          <div className="w-full flex-1">
            <div className="opacity-80 hover:opacity-100 transition-opacity duration-500">
              <AgaroseGel />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONCLUSION */}
      <section className="w-full py-12 border-b border-zinc-800/50 space-y-8">
        <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">5. Conclusion</h2>

        <div className="grid grid-cols-1 gap-6">
          {/* Collaboration Offer */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-zinc-900/50 overflow-hidden border border-white/5 hover:border-white/10">
            {/* <div className="absolute top-0 right-0 p-4 opacity-20">
              <Telescope size={120} className="text-zinc-700 -rotate-12" />
            </div> */}
            <div className="relative z-10 space-y-5">
              <div>
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Future Directions</h4>
                <h3 className="text-xl text-white font-medium">Collaboration</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                I am open to invitations to help solve <strong className="text-zinc-300/90">any</strong> problem that fits these three criteria:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-4 group">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-blue-400 transition-colors" />
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">The problem is intellectually rigorous.</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-green-400 transition-colors" />
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">The solution is technologically challenging.</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-purple-400 transition-colors" />
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">The outcome is impactful to the community.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 space-y-8">
        <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">5. Discussion, & References</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">References</h3>
              <ul className="space-y-2 text-zinc-400">
                <li><a target="_blank" href="https://linkedin.com/in/svnty" className="hover:text-white transition-colors fill-zinc-400 hover:fill-white">
                  <svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 382 382" xmlSpace="preserve" className="size-5 inline mr-2 align-sub">
                    <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
  L341.91,330.654L341.91,330.654z"/>
                  </svg>LinkedIn</a></li>
                <li><a target="_blank" href="https://github.com/svnty" className="hover:text-white transition-colors fill-zinc-400 hover:fill-white">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-5 inline mr-2 align-sub"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">Further Invesitgations</h3>
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <Link
                  href="/who-am-i"
                  className="cursor-pointer flex-1 px-8 py-3 bg-stone-300 text-black font-semibold rounded-full hover:bg-stone-400 transition-all active:scale-95 text-center">
                  Who Am I?
                </Link>
                <Link
                  href="/work"
                  className="flex-1 px-8 py-3 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all active:scale-95 text-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );

}
