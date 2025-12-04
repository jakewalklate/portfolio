"use client";
import GeneticEditing from "@/components/GeneticEditing";
import AgaroseGel from "@/components/AgaroseGel";
import { Linkedin } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-32 pb-20 px-6 relative">
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
      <section id="about" className="max-w-5xl w-full py-16">
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
      </section>

      {/* Engineering Section */}
      <section className="max-w-5xl w-full py-16 space-y-12">
        <GeneticEditing />
      </section>

      <section className="max-w-5xl w-full py-16 space-y-8">
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
      </section>

      {/* Agarose Gel Visualization */}
      <section className="w-full pb-10 opacity-80 hover:opacity-100 transition-opacity duration-500">
        <AgaroseGel />
      </section>
    </main >
  );
}
