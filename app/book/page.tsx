import React from "react";

export default function BookPage() {
  return (
    <main className="flex flex-col items-center pt-32 pb-20 px-6 min-h-screen">
      <section className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Book Cover Placeholder */}
        <div className="relative aspect-[2/3] w-full max-w-sm mx-auto bg-zinc-900 rounded-r-2xl rounded-l-sm border-r-4 border-zinc-800 shadow-2xl flex items-center justify-center group overflow-hidden">
          <img src="/5x8.png" alt="Book Cover" className="absolute object-contain ml-4 h-[99%]" />
          {/* Spine effect */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-zinc-800 to-zinc-900 border-r border-black/50"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-serif">
              The Pharmacology of Silence
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              A memoir of my experience of being diagnosed as mentally ill and locked inside a maximum security prison.
            </p>
          </div>

          <div className="prose prose-invert prose-zinc">
            <p className="text-zinc-400 leading-relaxed">
              Through my memoir, I delve into the harrowing experience of being diagnosed as mentally ill and confined within a maximum-security prison. This work critically examines the intersection of personal trauma and systemic indifference, inviting readers to question the true nature of institutional assumptions.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a download href="/the_pharmacology_of_silence_censored_compressed.pdf" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all active:scale-95">
              Download PDF
            </a>
            <a href="/excerpt.pdf" className="px-8 py-3 bg-transparent border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-800 transition-all active:scale-95">
              Read Excerpt
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}