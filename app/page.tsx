"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>

      <main className="flex flex-col items-center justify-center pt-32 pb-20 px-6">
        {/* Hero Section */}
        <section className="max-w-3xl w-full space-y-8 text-center sm:text-left py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for project discussion
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">
            Jake Spencer Walklate
          </h1>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-400">
              Biotech Engineer & Creative
            </h2>
            <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
              Merging biological systems with engineering principles.
              Also known as <span className="text-white font-semibold">svnty</span>.
              Building the future of biotech and digital experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
            <Link
              href="/work"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all active:scale-95 text-center"
            >
              View Portfolio
            </Link>
            <a
              href="https://x.com/svnty_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all active:scale-95 text-center"
            >
              Follow on 𝕏
            </a>
          </div>
        </section>

        {/* Bento Grid / About Section */}
        <section id="about" className="max-w-5xl w-full py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">Biotech Engineering</h3>
              <p className="text-zinc-400 leading-relaxed">
                Specializing in synthetic biology and software engineering.
                I design and optimize sustainable solutions for engineering and biological systems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">Connect</h3>
              <ul className="space-y-2 text-zinc-400">
                <li><a target="_blank" href="https://linkedin.com/in/svnty" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a target="_blank" href="https://github.com/svnty" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-3 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">Let's work together</h3>
                <p className="text-zinc-400">Open for consulting and collaborations.</p>
              </div>
              <span onClick={() => document.getElementById("contact")?.click()} className="cursor-pointer h-12 w-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
